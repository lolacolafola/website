import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Prism = lazy(() => import('../components/Prism'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

export default function HomePage() {
  const [shouldRenderPrism, setShouldRenderPrism] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setShouldRenderPrism(true), { timeout: 200 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(() => setShouldRenderPrism(true), 200)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <main>

      {/* ── HERO ── */}
      <div className="hero-cluster">
        <div className="hero-cluster-bg" aria-hidden="true">
          <div className="hero-prism">
            {!shouldRenderPrism ? (
              <div className="hero-prism-placeholder" aria-hidden="true" />
            ) : (
              <Suspense fallback={<div className="hero-prism-placeholder" aria-hidden="true" />}>
                <Prism animationType="3drotate" timeScale={0.4} height={3.5} baseWidth={5.5} scale={3.6} hueShift={0.3} colorFrequency={1} noise={0} glow={0.8} suspendWhenOffscreen maxFps={30} />
              </Suspense>
            )}
          </div>
        </div>

        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-credentials">
                <span>E3 Speaker</span>
                <span className="dot">&middot;</span>
                Paris
                <span className="dot">&middot;</span>
                London
                <span className="dot">&middot;</span>
                New York
                <span className="dot">&middot;</span>
                Since 2013
              </div>
              <h1>
                <span className="highlight">Earn fans,</span><br />not just customers.
              </h1>
              <p className="hero-subtitle">
                For consumer brands ready to turn their audience into their most powerful growth channel.
              </p>
              <div className="hero-actions">
                <Link to="/services" className="hero-cta">How I Can Help</Link>
                <a href={CALENDLY_URL} className="hero-cta-secondary" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── LOGOS ── */}
      <section className="logos-strip">
        <div className="container">
          <p className="logos-label">Companies I&apos;ve worked with</p>
          <div className="logos-row">
            <span className="logo-text">Ubisoft</span>
            <span className="logo-text">Amazon Games</span>
            <span className="logo-text">BlaBlaCar</span>
            <span className="logo-text">US Mobile</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT (condensed) ── */}
      <section className="about-brief">
        <div className="container">
          <div className="about-brief-content">
            <div className="about-brief-text">
              <h2>I design, build, and ship.</h2>
              <p>
                I&apos;ve spent 12 years inside consumer tech and video games, at Ubisoft, Amazon Games, BlaBlaCar, and beyond. Building from zero, scaling to millions, and bridging audiences from one product to the next.
              </p>
              <p>
                For the past few years I&apos;ve been consulting for gaming studios, tech startups and consumer apps, bringing a unique blend to the table: cross-team fluency, product design, gamification thinking, community building, and brand storytelling.
              </p>
              <p>
                <strong>The outcome?</strong> Love brands people can&apos;t stop talking about. And fans who stay longer, spend more, and bring others with them.
              </p>
            </div>
            <div className="about-brief-right">
              <img src="/Ubisoft+Debuts+New+Products+E3+Gaming+Event+UNgBGdNUMR-x 2.jpg" alt="Laura Cordrey speaking at E3" className="about-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="proof-section">
        <div className="container">
          <div className="proof-stats-grid">
            <div className="proof-stat-item">
              <div className="proof-stat-metric">60M+ UGC</div>
              <p className="proof-stat-desc">Ubisoft &middot; community programs</p>
            </div>
            <div className="proof-stat-item">
              <div className="proof-stat-metric">$32K revenue</div>
              <p className="proof-stat-desc">US Mobile &middot; community bundle</p>
            </div>
            <div className="proof-stat-item">
              <div className="proof-stat-metric">&minus;50% CAC</div>
              <p className="proof-stat-desc">BlaBlaCar &middot; brand storytelling</p>
            </div>
            <div className="proof-stat-item">
              <div className="proof-stat-metric">+80% MAU</div>
              <p className="proof-stat-desc">Azarus &middot; Twitch campaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO PATHS TEASE ── */}
      <section className="paths-tease">
        <div className="container">
          <h2 className="section-title">Two ways I can help</h2>
          <div className="paths-grid">
            <Link to="/services" className="path-card">
              <span className="path-badge">Consulting</span>
              <h3>Fan Growth Strategy &amp; Execution</h3>
              <p>From participation systems and creator-led growth to retention mechanics and brand-led loyalty — I design and build what makes fans stay.</p>
              <span className="path-link">View services &rarr;</span>
            </Link>
            <Link to="/flywheel" className="path-card path-card-highlight">
              <span className="path-badge">Methodology</span>
              <h3>The Fandom Flywheel&trade;</h3>
              <p>My proprietary five-stage system for turning passive audiences into active fans who drive repeat revenue and organic growth.</p>
              <span className="path-link">Explore the Flywheel &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to turn your audience into<br />your most valuable growth channel?</h2>
          <p>
            Let&apos;s talk about where your fan value is going uncaptured — and what it would look like to build the system that turns it into retention, revenue, and word-of-mouth.
          </p>
          <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
            Book a Free 30-Min Call
          </a>
        </div>
      </section>

    </main>
  )
}
