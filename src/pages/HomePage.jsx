import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'
const Prism = lazy(() => import('../components/Prism'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

const caseStudyTeasers = [
  {
    brand: "Ubisoft",
    stat: "50M+",
    statLabel: "organic views",
    outcome: "$0 ad spend. Fans became the marketing channel.",
    href: "/case-studies#ubisoft"
  },
  {
    brand: "BlaBlaCar",
    stat: "\u20AC5",
    statLabel: "CAC",
    outcome: "0 to 1M UK members. 22 markets. One creative system.",
    href: "/case-studies#blablacar"
  },
  {
    brand: "US Mobile",
    stat: "$32K",
    statLabel: "in 3 hours",
    outcome: "Community monetised directly for the first time.",
    href: "/case-studies#us-mobile"
  },
  {
    brand: "Azarus",
    stat: "20%",
    statLabel: "viewer \u2192 member",
    outcome: "500K peak viewers. Servers crashed.",
    href: "/case-studies#azarus"
  }
]

const promiseStats = [
  {
    value: '66–80%',
    label: 'more spend',
    desc: 'Top fans outspend average customers by a wide margin'
  },
  {
    value: '2–3×',
    label: 'longer LTV',
    desc: 'Fans stay significantly longer — churn drops'
  },
  {
    value: '4×',
    label: 'more referrals',
    desc: 'Referred customers are 4× more likely to refer others'
  }
]

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
              <h1>
                <span className="highlight">Fan-powered growth</span> consulting for disruptor brands.
              </h1>
              <p className="hero-subtitle">
                Turn your audience into your most powerful growth channel. Earn fans, not just customers.
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
      <p className="logos-label">Companies I&apos;ve worked with</p>
      <section className="logos-strip bg-shelf">
        <div className="logos-marquee" aria-hidden="true">
          <div className="logos-track">
            {['Ubisoft','Amazon Games','BlaBlaCar','US Mobile','Azarus','Geode/Dazzly',
              'Ubisoft','Amazon Games','BlaBlaCar','US Mobile','Azarus','Geode/Dazzly'].map((name, i) => (
              <span className="logo-text" key={i}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAN-POWERED GROWTH INFOGRAPHIC ── */}
      <section className="fpg-section">
        <div className="container">
          <div className="fpg-intro">
            <h2 className="fpg-headline">
              The love is there.{' '}
              <GradientText
                colors={['#E8A020', '#4BBFB0', '#F5F5F0', '#E8A020']}
                animationSpeed={8}
              >
                Now turn it into growth.
              </GradientText>
            </h2>
            <p className="fpg-intro-text">
              Your most passionate users are your best untapped marketing channel. They refer friends, defend your brand, spend more — but only if you give them the system to do it. That&apos;s what I build.
            </p>
          </div>

        </div>
      </section>

      {/* ── QUALIFYING ── */}
      <section className="hp-qualifying">
        <div className="container">
          <ul className="hp-qualifying-list">
            <li>Loyal users, but growth still depends on paid spend</li>
            <li>Fans who love the product, but no system to activate them</li>
            <li>Retention is flat despite strong product quality</li>
            <li>Community exists, but isn&apos;t connected to growth metrics</li>
          </ul>
          <p className="hp-qualifying-bridge">Sound familiar?</p>
          <div className="fpg-cta">
            <Link to="/flywheel" className="cta-button">My system: The Fandom Flywheel&trade; &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── SEE IT IN ACTION ── */}
      <section className="results-section bg-elevated">
        <div className="container">
          <div className="case-teaser-scroll">
            {caseStudyTeasers.map((cs, i) => (
              <Link key={i} to={cs.href} className="case-teaser-card">
                <span className="case-teaser-brand">{cs.brand}</span>
                <span className="case-teaser-stat">{cs.stat}</span>
                <span className="case-teaser-stat-label">{cs.statLabel}</span>
                <p className="case-teaser-outcome">{cs.outcome}</p>
              </Link>
            ))}
          </div>
          <p className="results-intro">What fan-powered growth looks like in practice</p>
          <div className="fpg-see-more">
            <Link to="/case-studies">See more &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT (bio card) ── */}
      <section className="about-brief">
        <div className="container">
          <div className="bio-card">
            <img src="/Ubisoft+Debuts+New+Products+E3+Gaming+Event+UNgBGdNUMR-x 2.jpg" alt="Laura Cordrey speaking at E3" className="bio-photo" />
            <div className="bio-text">
              <h2>I build fan-powered growth engines.</h2>
              <p>
                I&apos;ve spent 12 years at the intersection of <strong>product-led growth</strong> and <strong>fan-led growth</strong> — building the systems that turn your user base into your most powerful growth channel.
              </p>
              <p>
                That includes the <strong>Fandom Flywheel&trade;</strong>, my proprietary framework for mapping your fan journey from first touchpoint to active advocate, and finding the revenue hiding in between.
              </p>
              <p>
                I&apos;ve done it for Ubisoft, Amazon Games, and BlaBlaCar. Now I do it for gaming, entertainment, and consumer brands as a fractional lead or strategic consultant. Based in Paris, working globally since 2013.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar bg-dark">
        <div className="container">
          <div className="stats-bar-grid">
            {[
              { value: "50M+", label: "Organic Views" },
              { value: "\u20AC5",   label: "CAC" },
              { value: "$0",   label: "Ad Spend" },
              { value: "500+", label: "Community Leaders" },
            ].map((stat) => (
              <div className="stats-bar-item" key={stat.label}>
                <span className="stats-bar-value">{stat.value}</span>
                <span className="stats-bar-label">{stat.label}</span>
              </div>
            ))}
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
      <section className="final-cta bg-dark border-gold-top">
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
