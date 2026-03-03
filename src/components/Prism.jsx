import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'

const vertex = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragment = `
  precision highp float;

  uniform vec2  iResolution;
  uniform float iTime;

  uniform float uHeight;
  uniform float uBaseHalf;
  uniform mat3  uRot;
  uniform int   uUseBaseWobble;
  uniform float uGlow;
  uniform vec2  uOffsetPx;
  uniform float uNoise;
  uniform float uSaturation;
  uniform float uScale;
  uniform float uHueShift;
  uniform float uColorFreq;
  uniform float uBloom;
  uniform float uCenterShift;
  uniform float uInvBaseHalf;
  uniform float uInvHeight;
  uniform float uMinAxis;
  uniform float uPxScale;
  uniform float uTimeScale;

  vec4 tanh4(vec4 x){
    vec4 e2x = exp(2.0 * x);
    return (e2x - 1.0) / (e2x + 1.0);
  }

  float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float sdOctaAnisoInv(vec3 p){
    vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
    float m = q.x + q.y + q.z - 1.0;
    return m * uMinAxis * 0.5773502691896258;
  }

  float sdPyramidUpInv(vec3 p){
    float oct = sdOctaAnisoInv(p);
    float halfSpace = -p.y;
    return max(oct, halfSpace);
  }

  mat3 hueRotation(float a){
    float c = cos(a), s = sin(a);
    mat3 W = mat3(
      0.299, 0.587, 0.114,
      0.299, 0.587, 0.114,
      0.299, 0.587, 0.114
    );
    mat3 U = mat3(
       0.701, -0.587, -0.114,
      -0.299,  0.413, -0.114,
      -0.300, -0.588,  0.886
    );
    mat3 V = mat3(
       0.168, -0.331,  0.500,
       0.328,  0.035, -0.500,
      -0.497,  0.296,  0.201
    );
    return W + U * c + V * s;
  }

  void main(){
    vec2 f = (gl_FragCoord.xy - 0.5 * iResolution.xy - uOffsetPx) * uPxScale;

    float z = 5.0;
    float d = 0.0;

    vec3 p;
    vec4 o = vec4(0.0);

    float centerShift = uCenterShift;
    float cf = uColorFreq;

    mat2 wob = mat2(1.0);
    if (uUseBaseWobble == 1) {
      float t = iTime * uTimeScale;
      float c0 = cos(t + 0.0);
      float c1 = cos(t + 33.0);
      float c2 = cos(t + 11.0);
      wob = mat2(c0, c1, c2, c0);
    }

    const int STEPS = 100;
    for (int i = 0; i < STEPS; i++) {
      p = vec3(f, z);
      p.xz = p.xz * wob;
      p = uRot * p;
      vec3 q = p;
      q.y += centerShift;
      d = 0.1 + 0.2 * abs(sdPyramidUpInv(q));
      z -= d;
      o += (sin((p.y + z) * cf + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0) / d;
    }

    o = tanh4(o * o * (uGlow * uBloom) / 1e5);

    vec3 col = o.rgb;
    float n = rand(gl_FragCoord.xy + vec2(iTime));
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);

    float L = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = clamp(mix(vec3(L), col, uSaturation), 0.0, 1.0);

    if(abs(uHueShift) > 0.0001){
      col = clamp(hueRotation(uHueShift) * col, 0.0, 1.0);
    }

    gl_FragColor = vec4(col, o.a);
  }
`

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

const lerp = (from, to, amount) => from + (to - from) * amount

const rotationMatrix = (rx, ry, rz, out) => {
  const c1 = Math.cos(rx)
  const s1 = Math.sin(rx)
  const c2 = Math.cos(ry)
  const s2 = Math.sin(ry)
  const c3 = Math.cos(rz)
  const s3 = Math.sin(rz)
  out[0] = c1 * c3 + s1 * s2 * s3
  out[1] = c2 * s3
  out[2] = -s1 * c3 + c1 * s2 * s3
  out[3] = -c1 * s3 + s1 * s2 * c3
  out[4] = c2 * c3
  out[5] = s1 * s3 + c1 * s2 * c3
  out[6] = s1 * c2
  out[7] = -s2
  out[8] = c1 * c2
  return out
}

export default function Prism({
  height = 3.5,
  baseWidth = 5.5,
  animationType = 'rotate',
  glow = 1,
  offset = { x: 0, y: 0 },
  noise = 0.5,
  transparent = true,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
  inertia = 0.05,
  bloom = 1,
  suspendWhenOffscreen = false,
  timeScale = 0.5,
  maxFps = 30
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || typeof window === 'undefined') return

    const prismHeight = Math.max(0.001, height)
    const baseHalf = Math.max(0.001, baseWidth) * 0.5
    const glowValue = Math.max(0, glow)
    const noiseValue = Math.max(0, noise)
    const offsetX = offset?.x ?? 0
    const offsetY = offset?.y ?? 0
    const saturation = transparent ? 1.5 : 1
    const scaleValue = Math.max(0.001, scale)
    const hue = hueShift || 0
    const colorFreq = Math.max(0, colorFrequency || 1)
    const bloomValue = Math.max(0, bloom || 1)
    const timeScaleValue = Math.max(0, timeScale || 1)
    const hoverStrengthValue = Math.max(0, hoverStrength || 1)
    const inertiaValue = clamp(inertia ?? 0.12, 0, 1)
    const dpr = Math.min(1.5, window.devicePixelRatio || 1)

    const renderer = new Renderer({ dpr, alpha: transparent, antialias: false })
    const gl = renderer.gl
    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)
    gl.disable(gl.BLEND)
    Object.assign(gl.canvas.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      display: 'block'
    })
    container.appendChild(gl.canvas)

    const geometry = new Triangle(gl)
    const resolution = new Float32Array(2)
    const offsetPx = new Float32Array(2)

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: { value: resolution },
        iTime: { value: 0 },
        uHeight: { value: prismHeight },
        uBaseHalf: { value: baseHalf },
        uUseBaseWobble: { value: 1 },
        uRot: { value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]) },
        uGlow: { value: glowValue },
        uOffsetPx: { value: offsetPx },
        uNoise: { value: noiseValue },
        uSaturation: { value: saturation },
        uScale: { value: scaleValue },
        uHueShift: { value: hue },
        uColorFreq: { value: colorFreq },
        uBloom: { value: bloomValue },
        uCenterShift: { value: prismHeight * 0.25 },
        uInvBaseHalf: { value: 1 / baseHalf },
        uInvHeight: { value: 1 / prismHeight },
        uMinAxis: { value: Math.min(baseHalf, prismHeight) },
        uPxScale: { value: 1 / ((gl.drawingBufferHeight || 1) * 0.1 * scaleValue) },
        uTimeScale: { value: timeScaleValue }
      }
    })

    const mesh = new Mesh(gl, { geometry, program })

    const resize = () => {
      const width = container.clientWidth || 1
      const height = container.clientHeight || 1
      renderer.setSize(width, height)
      resolution[0] = gl.drawingBufferWidth
      resolution[1] = gl.drawingBufferHeight
      offsetPx[0] = offsetX * dpr
      offsetPx[1] = offsetY * dpr
      program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * 0.1 * scaleValue)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    const rotMatrix = new Float32Array(9)
    const rand = () => Math.random()
    const wobbleX = 0.3 + rand() * 0.6
    const wobbleY = 0.2 + rand() * 0.7
    const wobbleZ = 0.1 + rand() * 0.5
    const phaseX = rand() * Math.PI * 2
    const phaseY = rand() * Math.PI * 2

    let rotX = 0
    let rotY = 0
    let rotZ = 0
    let targetX = 0
    let targetY = 0

    const pointer = { x: 0, y: 0, inside: false }

    const updatePointer = (event) => {
      const rect = container.getBoundingClientRect()
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const ny = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      pointer.x = clamp(nx, -1, 1)
      pointer.y = clamp(ny, -1, 1)
      pointer.inside = true
      start()
    }

    const handleLeave = () => {
      pointer.inside = false
    }

    const useHover = animationType === 'hover'
    const use3dRotate = animationType === '3drotate'
    program.uniforms.uUseBaseWobble.value = useHover || use3dRotate ? 0 : 1

    let pointerHandler = null
    if (useHover) {
      pointerHandler = (event) => updatePointer(event)
      window.addEventListener('pointermove', pointerHandler, { passive: true })
      window.addEventListener('mouseleave', handleLeave)
      window.addEventListener('blur', handleLeave)
    }

    const shouldStopWhenStill = noiseValue < 1e-6
    const startTime = performance.now()
    const frameInterval = maxFps > 0 ? 1000 / maxFps : 0
    let lastFrameAt = 0
    let rafId = 0

    const start = () => {
      if (!rafId) rafId = requestAnimationFrame(tick)
    }

    const stop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = 0
      }
    }

    const tick = (now) => {
      if (frameInterval > 0 && now - lastFrameAt < frameInterval) {
        rafId = requestAnimationFrame(tick)
        return
      }
      lastFrameAt = now

      const t = (now - startTime) * 0.001
      program.uniforms.iTime.value = t

      let keepRunning = true

      if (useHover) {
        const strength = 0.6 * hoverStrengthValue
        targetX = (pointer.inside ? -pointer.x : 0) * strength
        targetY = (pointer.inside ? pointer.y : 0) * strength
        rotX = lerp(rotX, targetX, inertiaValue)
        rotY = lerp(rotY, targetY, inertiaValue)
        rotZ = lerp(rotZ, 0, 0.1)
        program.uniforms.uRot.value = rotationMatrix(rotX, rotY, rotZ, rotMatrix)
        if (
          shouldStopWhenStill &&
          Math.abs(rotX - targetX) < 1e-4 &&
          Math.abs(rotY - targetY) < 1e-4 &&
          Math.abs(rotZ) < 1e-4
        ) {
          keepRunning = false
        }
      } else if (use3dRotate) {
        const tt = t * timeScaleValue
        rotX = tt * wobbleY
        rotY = Math.sin(tt * wobbleX + phaseX) * 0.6
        rotZ = Math.sin(tt * wobbleZ + phaseY) * 0.5
        program.uniforms.uRot.value = rotationMatrix(rotX, rotY, rotZ, rotMatrix)
        if (timeScaleValue < 1e-6) keepRunning = false
      } else {
        rotMatrix[0] = 1
        rotMatrix[1] = 0
        rotMatrix[2] = 0
        rotMatrix[3] = 0
        rotMatrix[4] = 1
        rotMatrix[5] = 0
        rotMatrix[6] = 0
        rotMatrix[7] = 0
        rotMatrix[8] = 1
        program.uniforms.uRot.value = rotMatrix
        if (timeScaleValue < 1e-6) keepRunning = false
      }

      renderer.render({ scene: mesh })

      if (keepRunning) {
        rafId = requestAnimationFrame(tick)
      } else {
        rafId = 0
      }
    }

    let observer = null
    if (suspendWhenOffscreen && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          start()
        } else {
          stop()
        }
      })
      observer.observe(container)
      start()
    } else {
      start()
    }

    return () => {
      stop()
      resizeObserver.disconnect()
      if (useHover && pointerHandler) {
        window.removeEventListener('pointermove', pointerHandler)
        window.removeEventListener('mouseleave', handleLeave)
        window.removeEventListener('blur', handleLeave)
      }
      if (observer) observer.disconnect()
      if (gl.canvas.parentElement === container) {
        container.removeChild(gl.canvas)
      }
      renderer.gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [
    height,
    baseWidth,
    animationType,
    glow,
    offset?.x,
    offset?.y,
    noise,
    transparent,
    scale,
    hueShift,
    colorFrequency,
    hoverStrength,
    inertia,
    bloom,
    suspendWhenOffscreen,
    timeScale,
    maxFps
  ])

  return <div className="prism-container" ref={containerRef} />
}
