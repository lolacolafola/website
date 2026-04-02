import { useEffect, useRef, useState } from 'react'

export default function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Small delay to ensure element is laid out before observing
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(el)
          }
        },
        { threshold, rootMargin: '50px 0px -20px 0px' }
      )

      observer.observe(el)
    }, 100)

    return () => clearTimeout(timer)
  }, [threshold])

  return [ref, isVisible]
}
