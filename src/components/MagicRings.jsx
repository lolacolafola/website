import { useEffect, useRef } from 'react'

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return r
    ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
    : [255, 255, 255]
}

function lerpRgb(hex1, hex2, t) {
  const [r1, g1, b1] = hexToRgb(hex1)
  const [r2, g2, b2] = hexToRgb(hex2)
  return [
    Math.round(r1 + (r2 - r1) * t),
    Math.round(g1 + (g2 - g1) * t),
    Math.round(b1 + (b2 - b1) * t),
  ]
}

const TAU = Math.PI * 2

export default function MagicRings({
  color = '#fc42ff',
  colorTwo = '#42fcff',
  ringCount = 6,
  speed = 1,
  attenuation = 10,
  lineThickness = 2,
  baseRadius = 0.35,
  radiusStep = 0.1,
  scaleRate = 0.1,
  opacity = 1,
  blur = 0,
  noiseAmount = 0.1,
  rotation = 0,
  ringGap = 1.5,
  fadeIn = 0.7,
  fadeOut = 0.5,
  followMouse = false,
  mouseInfluence = 0.2,
  hoverScale = 1.2,
  parallax = 0.05,
  clickBurst = false,
  maxFps = 60,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container || typeof window === 'undefined') return

    const ctx = canvas.getContext('2d')
    const dpr = Math.min(2, window.devicePixelRatio || 1)

    let w = 0, h = 0, cx = 0, cy = 0
    const mouse = { x: 0, y: 0 }
    let isHovered = false
    let burstScale = 1

    const resize = () => {
      w = container.clientWidth
      h = container.clientHeight
      canvas.width  = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      Object.assign(canvas.style, { width: `${w}px`, height: `${h}px` })
      cx = w / 2
      cy = h / 2
    }

    const ro = new ResizeObserver(resize)
    ro.observe(container)
    resize()

    // ── mouse/hover ─────────────────────────────
    const onMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left - cx) / cx   // -1 → +1
      mouse.y = (e.clientY - rect.top  - cy) / cy
    }
    const onEnter = () => { isHovered = true }
    const onLeave = () => { isHovered = false; mouse.x = 0; mouse.y = 0 }

    container.addEventListener('mousemove', onMove,  { passive: true })
    container.addEventListener('mouseenter', onEnter)
    container.addEventListener('mouseleave', onLeave)

    // click burst
    const onClick = () => { if (clickBurst) { burstScale = 1.35 } }
    if (clickBurst) container.addEventListener('click', onClick)

    // ── render loop ──────────────────────────────
    const frameInterval = maxFps > 0 ? 1000 / maxFps : 0
    const t0 = performance.now()
    let lastFrame = 0
    let rafId = 0

    // falloff constant: higher attenuation = rings stay bright longer
    const falloff = ringCount / Math.max(attenuation, 0.001)

    const tick = (now) => {
      if (frameInterval > 0 && now - lastFrame < frameInterval) {
        rafId = requestAnimationFrame(tick)
        return
      }
      lastFrame = now

      const t = (now - t0) * 0.001 * speed

      // decay burst
      if (burstScale > 1) burstScale = Math.max(1, burstScale - 0.02)

      const halfMin = Math.min(w, h) * 0.5
      const hoverMult = isHovered ? hoverScale : 1

      // offset centre for mouse follow / parallax
      const ox = followMouse
        ? mouse.x * mouseInfluence * halfMin
        : mouse.x * parallax * halfMin
      const oy = followMouse
        ? mouse.y * mouseInfluence * halfMin
        : mouse.y * parallax * halfMin

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)
      ctx.translate(cx + ox, cy + oy)
      ctx.rotate((rotation * Math.PI) / 180)

      if (blur > 0) ctx.filter = `blur(${blur}px)`

      for (let i = 0; i < ringCount; i++) {
        // Phase for this ring (offset by ringGap per ring)
        const raw   = t - i * ringGap
        const phase = ((raw % TAU) + TAU) % TAU   // 0 → TAU
        const pn    = phase / TAU                  // 0 → 1 (normalised)

        // Scale pulse
        const scalePulse = 1 + Math.sin(phase) * scaleRate

        // Radius
        const baseR = (baseRadius + i * radiusStep) * halfMin
        const r     = baseR * scalePulse * hoverMult * burstScale

        // Attenuation (outer rings dimmer)
        const attFactor = Math.exp(-i * falloff)

        // Fade envelope
        let fadeAlpha = 1
        if (pn < fadeIn)          fadeAlpha = Math.min(fadeAlpha, pn / fadeIn)
        if (pn > (1 - fadeOut))   fadeAlpha = Math.min(fadeAlpha, (1 - pn) / fadeOut)

        const finalAlpha = fadeAlpha * attFactor * opacity
        if (finalAlpha < 0.005) continue

        // Color
        const tc = ringCount > 1 ? i / (ringCount - 1) : 0
        const [cr, cg, cb] = lerpRgb(color, colorTwo, tc)

        ctx.beginPath()

        if (noiseAmount > 0) {
          // Slightly wavy circle via path
          const steps = 90
          for (let s = 0; s <= steps; s++) {
            const angle = (s / steps) * TAU
            const noise = Math.sin(angle * 5 + t * 1.5 + i * 1.1) * noiseAmount * r * 0.12
            const rx = Math.cos(angle) * (r + noise)
            const ry = Math.sin(angle) * (r + noise)
            s === 0 ? ctx.moveTo(rx, ry) : ctx.lineTo(rx, ry)
          }
          ctx.closePath()
        } else {
          ctx.arc(0, 0, Math.max(r, 0.5), 0, TAU)
        }

        ctx.strokeStyle = `rgba(${cr},${cg},${cb},${finalAlpha})`
        ctx.lineWidth   = lineThickness
        ctx.stroke()
      }

      ctx.restore()
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      container.removeEventListener('mousemove',  onMove)
      container.removeEventListener('mouseenter', onEnter)
      container.removeEventListener('mouseleave', onLeave)
      if (clickBurst) container.removeEventListener('click', onClick)
    }
  }, [
    color, colorTwo, ringCount, speed, attenuation, lineThickness,
    baseRadius, radiusStep, scaleRate, opacity, blur, noiseAmount,
    rotation, ringGap, fadeIn, fadeOut, followMouse, mouseInfluence,
    hoverScale, parallax, clickBurst, maxFps,
  ])

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}
