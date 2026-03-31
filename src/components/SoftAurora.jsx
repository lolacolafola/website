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
  uniform vec3  uColor1;
  uniform vec3  uColor2;
  uniform float uSpeed;
  uniform float uBrightness;
  uniform float uNoiseFreq;
  uniform float uNoiseAmp;
  uniform float uBandHeight;
  uniform float uBandSpread;
  uniform float uOctaveDecay;
  uniform float uLayerOffset;
  uniform float uColorSpeed;
  uniform vec2  uMouse;
  uniform float uMouseInfluence;
  uniform float uScale;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i),               hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p, float decay) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p  = p * 2.1 + vec2(1.7, 9.2);
      a *= decay;
    }
    return v;
  }

  void main() {
    vec2  uv     = gl_FragCoord.xy / iResolution.xy;
    float aspect = iResolution.x / iResolution.y;
    float t      = iTime * uSpeed;

    // Mouse adds a gentle horizontal drift to noise coords
    vec2 mouseShift = uMouse * uMouseInfluence * 0.12;

    // Noise coords (aspect-corrected so patterns look round, not stretched)
    vec2 np = vec2(uv.x * aspect, uv.y) * uNoiseFreq * uScale
              + vec2(t * 0.22, 0.0)
              + mouseShift;

    float decay = max(uOctaveDecay, 0.05);

    // Warp the band's vertical centre
    float warp = (fbm(np, decay) - 0.4) * uNoiseAmp * 0.35;

    float bandCenter = 0.5 + uLayerOffset + warp;
    float dy         = uv.y - bandCenter;

    // Soft gaussian band
    float spread = max(uBandSpread * 0.28, 0.04);
    float band   = exp(-(dy * dy) / (spread * spread)) * uBandHeight;
    band = clamp(band, 0.0, 1.0);

    // Colour varies across the band using a second noise layer
    float cn  = fbm(np * 0.65 + vec2(t * uColorSpeed * 0.18, 1.3), decay);
    vec3  col = mix(uColor1, uColor2, clamp(cn, 0.0, 1.0));
    col *= uBrightness;

    gl_FragColor = vec4(col, band);
  }
`

function hexToRgbArray(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return r
    ? new Float32Array([parseInt(r[1], 16) / 255, parseInt(r[2], 16) / 255, parseInt(r[3], 16) / 255])
    : new Float32Array([1, 1, 1])
}

export default function SoftAurora({
  speed = 0.6,
  scale = 1.5,
  brightness = 1,
  color1 = '#f7f7f7',
  color2 = '#e100ff',
  noiseFrequency = 2.5,
  noiseAmplitude = 1,
  bandHeight = 0.5,
  bandSpread = 1,
  octaveDecay = 0.1,
  layerOffset = 0,
  colorSpeed = 1,
  enableMouseInteraction = false,
  mouseInfluence = 0.25,
  maxFps = 30,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || typeof window === 'undefined') return

    const dpr = Math.min(1.5, window.devicePixelRatio || 1)
    const renderer = new Renderer({ dpr, alpha: true, antialias: false })
    const gl = renderer.gl

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    gl.disable(gl.DEPTH_TEST)

    Object.assign(gl.canvas.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      display: 'block',
    })
    container.appendChild(gl.canvas)

    const resolution   = new Float32Array(2)
    const mouseUniform = new Float32Array(2)

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution:    { value: resolution },
        iTime:          { value: 0 },
        uColor1:        { value: hexToRgbArray(color1) },
        uColor2:        { value: hexToRgbArray(color2) },
        uSpeed:         { value: speed },
        uBrightness:    { value: brightness },
        uNoiseFreq:     { value: noiseFrequency },
        uNoiseAmp:      { value: noiseAmplitude },
        uBandHeight:    { value: bandHeight },
        uBandSpread:    { value: bandSpread },
        uOctaveDecay:   { value: Math.max(octaveDecay, 0.05) },
        uLayerOffset:   { value: layerOffset },
        uColorSpeed:    { value: colorSpeed },
        uMouse:         { value: mouseUniform },
        uMouseInfluence:{ value: enableMouseInteraction ? mouseInfluence : 0 },
        uScale:         { value: scale },
      },
    })

    const geometry = new Triangle(gl)
    const mesh = new Mesh(gl, { geometry, program })

    const resize = () => {
      const w = container.clientWidth  || 1
      const h = container.clientHeight || 1
      renderer.setSize(w, h)
      resolution[0] = gl.drawingBufferWidth
      resolution[1] = gl.drawingBufferHeight
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    // Mouse tracking
    let pointerHandler = null
    if (enableMouseInteraction) {
      pointerHandler = (e) => {
        mouseUniform[0] =  (e.clientX / window.innerWidth)  * 2 - 1
        mouseUniform[1] = -((e.clientY / window.innerHeight) * 2 - 1)
      }
      window.addEventListener('pointermove', pointerHandler, { passive: true })
    }

    // Animation loop with IntersectionObserver pause when off-screen
    const frameInterval = maxFps > 0 ? 1000 / maxFps : 0
    const startTime = performance.now()
    let lastFrameAt = 0
    let rafId = 0

    const start = () => { if (!rafId) rafId = requestAnimationFrame(tick) }
    const stop  = () => { if (rafId) { cancelAnimationFrame(rafId); rafId = 0 } }

    const tick = (now) => {
      if (frameInterval > 0 && now - lastFrameAt < frameInterval) {
        rafId = requestAnimationFrame(tick)
        return
      }
      lastFrameAt = now
      program.uniforms.iTime.value = (now - startTime) * 0.001
      renderer.render({ scene: mesh })
      rafId = requestAnimationFrame(tick)
    }

    let observer = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver((entries) => {
        entries.some((e) => e.isIntersecting) ? start() : stop()
      })
      observer.observe(container)
    }
    start()

    return () => {
      stop()
      resizeObserver.disconnect()
      if (observer) observer.disconnect()
      if (pointerHandler) window.removeEventListener('pointermove', pointerHandler)
      if (gl.canvas.parentElement === container) container.removeChild(gl.canvas)
      renderer.gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [
    speed, scale, brightness, color1, color2,
    noiseFrequency, noiseAmplitude, bandHeight, bandSpread,
    octaveDecay, layerOffset, colorSpeed,
    enableMouseInteraction, mouseInfluence, maxFps,
  ])

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
