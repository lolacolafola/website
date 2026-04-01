import { useState, useRef, useEffect } from 'react'

const GAP = 20
const CARD_RATIO = 0.31 // 31% of wrapper width — shows 3 cards

export default function ProofCarousel({ children }) {
  const [active, setActive] = useState(0)
  const [offset, setOffset] = useState(0)
  const wrapperRef = useRef(null)
  const cards = Array.isArray(children) ? children : [children]
  const count = cards.length

  function calcOffset(index) {
    if (!wrapperRef.current) return 0
    const ww = wrapperRef.current.offsetWidth
    const cardW = ww * CARD_RATIO
    const totalTrack = count * cardW + (count - 1) * GAP
    // If all cards fit, no offset needed
    if (totalTrack <= ww) return (ww - totalTrack) / 2
    // Otherwise shift so active card is centered, but clamp edges
    const center = (ww - cardW) / 2
    const raw = center - index * (cardW + GAP)
    const maxOffset = 0
    const minOffset = ww - totalTrack
    return Math.max(minOffset, Math.min(maxOffset, raw))
  }

  useEffect(() => {
    function update() { setOffset(calcOffset(active)) }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [active])

  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(count - 1, i + 1))

  return (
    <div className="proof-carousel">
      <div className="proof-carousel-wrapper" ref={wrapperRef}>
        <div
          className="proof-carousel-track"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`proof-carousel-slide${i === active ? ' active' : ''}`}
              onClick={() => i !== active && setActive(i)}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className="proof-carousel-controls">
        <button
          className="proof-carousel-btn"
          onClick={prev}
          disabled={active === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <div className="proof-carousel-dots">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`proof-carousel-dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="proof-carousel-btn"
          onClick={next}
          disabled={active === count - 1}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  )
}
