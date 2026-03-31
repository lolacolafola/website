import { useRef, useEffect } from 'react'

const PEEK = 96 // px of each stacked card's header that stays visible

export function ScrollStackItem({ children }) {
  return (
    <div className="scroll-stack-item">
      {children}
    </div>
  )
}

export default function ScrollStack({ children, cardHeight = 380 }) {
  const wrapperRef = useRef(null)
  const stickyRef = useRef(null)
  const cards = Array.isArray(children) ? children : [children]
  const count = cards.length

  useEffect(() => {
    const wrapper = wrapperRef.current
    const sticky = stickyRef.current
    if (!wrapper || !sticky) return

    const items = [...sticky.querySelectorAll('.scroll-stack-item')]
    const n = items.length
    const stickyH = sticky.offsetHeight

    // Set each card's permanent position in the stack
    items.forEach((item, i) => {
      item.style.position = 'absolute'
      item.style.left = '0'
      item.style.right = '0'
      item.style.top = `${i * PEEK}px`
      item.style.height = `${cardHeight}px`
      item.style.zIndex = String(i + 1)
      item.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease'
    })

    function getProgress() {
      const rect = wrapper.getBoundingClientRect()
      const totalScroll = wrapper.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, Math.min(totalScroll, -rect.top))
      return { progress: totalScroll > 0 ? scrolled / totalScroll : 0, totalScroll }
    }

    function update() {
      const { progress } = getProgress()
      items.forEach((item, i) => {
        const p = Math.max(0, Math.min(1, (progress - (i - 1) / n) / (1 / n)))
        const offscreen = stickyH - i * PEEK
        const ty = (1 - p) * offscreen
        item.style.transform = `translateY(${ty}px)`
        item.style.opacity = p > 0.05 ? '1' : '0'
        // Show pointer cursor only on peeking (stacked) cards
        const activeIndex = Math.round(progress * n)
        item.style.cursor = i < activeIndex ? 'pointer' : 'default'
      })
    }

    // Click a peeking card to scroll back to it
    const clickHandlers = items.map((item, i) => {
      const handler = () => {
        const { totalScroll } = getProgress()
        const targetScrolled = (i / n) * totalScroll
        const wrapperDocTop = wrapper.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: wrapperDocTop + targetScrolled, behavior: 'smooth' })
      }
      item.addEventListener('click', handler)
      return handler
    })

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      items.forEach((item, i) => item.removeEventListener('click', clickHandlers[i]))
    }
  }, [count, cardHeight])

  // Sticky area tall enough to show all peek headers + full active card
  const stickyHeight = (count - 1) * PEEK + cardHeight

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative', height: `calc(${count * cardHeight}px + 40vh)` }}
    >
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: '80px',
          height: `${stickyHeight}px`,
          overflow: 'clip',
        }}
      >
        {children}
      </div>
    </div>
  )
}
