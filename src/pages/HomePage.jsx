import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Prism = lazy(() => import('../components/Prism'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

const storyBeats = [
  {
    icon: "trending-up",
    text: "Most brands pay more every year to reach the same people.",
  },
  {
    icon: "users",
    text: "Meanwhile, their biggest fans are already there \u2014 spending, sharing, creating \u2014 with no system behind it.",
  },
  {
    icon: "git-merge",
    text: "I\u2019ve spent 12 years at the intersection of product-led growth and fan-led growth. I found the gap between them.",
  },
  {
    icon: "refresh-cw",
    text: "Fan-powered growth is a system that turns your audience into your most effective marketing channel \u2014 without paid media.",
    accent: "This is my methodology."
  },
  {
    icon: "unlock",
    text: "I help product-led consumer brands find revenue where they didn\u2019t know it existed.",
    ctas: [
      { label: "See how it works \u2192", href: "/flywheel" },
      { label: "See the results \u2192", href: "/case-studies" }
    ]
  }
]

const beatIcons = {
  "trending-up": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  "users": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "git-merge": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  ),
  "refresh-cw": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  "unlock": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  )
}

const testimonials = [
  {
    quote: "Laura is a start-up swiss knife\u2026 with some extra fun.",
    name: "Nicolas Brusson",
    title: "CEO of BlaBlaCar"
  },
  {
    quote: "Placeholder \u2014 collect from US Mobile contact",
    name: "TBC",
    title: "US Mobile"
  },
  {
    quote: "Placeholder \u2014 collect from Ubisoft contact",
    name: "TBC",
    title: "Ubisoft"
  }
]

export default function HomePage() {
  const [shouldRenderPrism, setShouldRenderPrism] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('.story-beat').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
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
                <span>Fan-Powered Growth Engines</span>
                <span className="dot">&middot;</span>
                Ex-Ubisoft, BlaBlaCar, Amazon
                <span className="dot">&middot;</span>
                Paris
                <span className="dot">&middot;</span>
                NYC
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
            <span className="logo-text">Azarus</span>
            <span className="logo-text">Geode/Dazzly</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT (condensed) ── */}
      <section className="about-brief">
        <div className="container">
          <div className="about-brief-content">
            <div className="about-brief-text">
              <h2>I build fan-powered growth engines.</h2>
              <p>
                Not by relying on ad spend. But by building brand experiences people connect with, and designing systems that make audiences do the marketing for you.
              </p>
              <p>
                I presented Delta Company on the E3 stage to 10 million viewers. Grew BlaBlaCar&apos;s UK community from zero to a million members. Converted 20% of a 500K-viewer Twitch event into platform signups (crashing the servers).
              </p>
              <p>
                12+ years across Ubisoft, Amazon Games, BlaBlaCar, and high-growth startups. Now I help gaming, entertainment, and consumer brands build the fan systems I used to build in-house, as a fractional lead or strategic consultant. I speak product, design, and marketing fluently, which means ideas actually ship.
              </p>
              <p>
                <strong>The outcome?</strong> Fans who stay longer, spend more, and bring others with them.
              </p>
            </div>
            <div className="about-brief-right">
              <img src="/Ubisoft+Debuts+New+Products+E3+Gaming+Event+UNgBGdNUMR-x 2.jpg" alt="Laura Cordrey speaking at E3" className="about-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY BEATS ── */}
      <section className="story-section">
        <div className="container">
          <div className="story-beats">
            {storyBeats.map((beat, i) => (
              <div key={i} className="story-beat">
                <div className="story-beat-icon">{beatIcons[beat.icon]}</div>
                <p className="story-beat-text">{beat.text}</p>
                {beat.accent && <span className="story-beat-accent">{beat.accent}</span>}
                {beat.ctas && (
                  <div className="story-ctas">
                    {beat.ctas.map((cta, j) => (
                      <Link key={j} to={cta.href} className="story-cta">{cta.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF STATS ── */}
      <section className="home-stats">
        <div className="container">
          <div className="cs-aggregate">
            <div className="cs-agg-item">
              <span className="cs-agg-value">50M+</span>
              <span className="cs-agg-label">Organic Views</span>
            </div>
            <div className="cs-agg-item">
              <span className="cs-agg-value">€5</span>
              <span className="cs-agg-label">CAC</span>
            </div>
            <div className="cs-agg-item">
              <span className="cs-agg-value">$0</span>
              <span className="cs-agg-label">Ad Spend</span>
            </div>
            <div className="cs-agg-item">
              <span className="cs-agg-value">500+</span>
              <span className="cs-agg-label">Community Leaders</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-carousel">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className={`testimonial-card ${i === activeIndex ? 'active' : ''}`}
              >
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <cite className="testimonial-cite">&mdash; {t.name}, {t.title}</cite>
              </blockquote>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO TEASE ── */}
      <section className="portfolio-tease">
        <div className="container" style={{ textAlign: 'center', padding: '40px 0' }}>
          <Link to="/portfolio" className="cta-link">See what I&apos;ve built &rarr;</Link>
        </div>
      </section>

      {/* ── TWO PATHS TEASE ── */}
      <section className="paths-tease">
        <div className="container">
          <h2 className="section-title">Two ways I can help</h2>
          <div className="paths-grid">
            <Link to="/services" className="path-card">
              <span className="path-badge">Consulting</span>
              <h3>Fan-Powered Growth Engines</h3>
              <p>I build the systems that turn audiences into your most effective marketing channel — without paid media. Participation mechanics, creator-led growth, retention loops, brand storytelling. Ubisoft. BlaBlaCar. US Mobile. Azarus.</p>
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
