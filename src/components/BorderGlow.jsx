import { useRef, useState } from 'react'

export default function BorderGlow({
  children,
  edgeSensitivity = 30,
  glowColor = '75 191 176',
  backgroundColor = '#141414',
  borderRadius = 12,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#4BBFB0', '#E8A020', '#4BBFB0'],
  style = {},
  className = '',
}) {
  const ref = useRef(null)
  const [glow, setGlow] = useState(null)

  const handleMouseMove = e => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const w = rect.width
    const h = rect.height

    const distLeft   = x
    const distRight  = w - x
    const distTop    = y
    const distBottom = h - y
    const minDist    = Math.min(distLeft, distRight, distTop, distBottom)

    if (minDist > edgeSensitivity) {
      setGlow(null)
      return
    }

    // Determine which edge is closest and set gradient direction
    let angle = 0
    if (minDist === distTop)    angle = 180
    if (minDist === distBottom) angle = 0
    if (minDist === distLeft)   angle = 90
    if (minDist === distRight)  angle = 270

    const progress = 1 - minDist / edgeSensitivity
    setGlow({ angle, progress, x, y })
  }

  const handleMouseLeave = () => setGlow(null)

  const borderGradient = glow
    ? `linear-gradient(${glow.angle}deg, ${colors.join(', ')})`
    : `linear-gradient(135deg, ${colors.join(', ')})`

  const glowOpacity = glow ? glow.progress * glowIntensity : 0

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: 'relative',
        borderRadius,
        padding: '1px',
        background: borderGradient,
        display: 'flex',
        flexDirection: 'column',
        transition: animated ? 'background 0.3s ease' : undefined,
        ...style,
      }}
    >
      {/* Inner glow radial overlay near cursor */}
      {glow && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius,
            background: `radial-gradient(circle ${glowRadius}px at ${glow.x}px ${glow.y}px, rgba(${glowColor}, ${glowOpacity * 0.6}), transparent)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}
      {/* Content wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: borderRadius - 1,
          background: backgroundColor,
          flex: 1,
        }}
      >
        {children}
      </div>
    </div>
  )
}
