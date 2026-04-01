import { useMemo } from 'react'

export default function GradientText({
  children,
  colors = ['#E8A020', '#4BBFB0', '#E8A020'],
  animationSpeed = 8,
  showBorder = false,
  className = '',
}) {
  const gradientStyle = useMemo(() => {
    const grad = `linear-gradient(90deg, ${colors.join(', ')})`
    return {
      backgroundImage: grad,
      backgroundSize: `${colors.length * 100}% 100%`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: `gradientShift ${animationSpeed}s ease-in-out infinite`,
      display: 'inline-block',
    }
  }, [colors, animationSpeed])

  const borderStyle = useMemo(() => {
    if (!showBorder) return {}
    const grad = `linear-gradient(90deg, ${colors.join(', ')})`
    return {
      border: '1px solid transparent',
      borderImage: grad,
      borderImageSlice: 1,
      borderRadius: '12px',
      padding: '4px 12px',
    }
  }, [colors, showBorder])

  return (
    <span className={className} style={{ ...gradientStyle, ...borderStyle }}>
      {children}
    </span>
  )
}
