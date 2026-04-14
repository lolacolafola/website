import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'
import SpotlightCard from '../components/SpotlightCard'
import BorderGlow from '../components/BorderGlow'
import StarBorder from '../components/StarBorder'
import SiteFooter from '../components/SiteFooter'
import useReveal from '../hooks/useReveal'
const Prism = lazy(() => import('../components/Prism'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

const caseStudyTeasers = [
  {
    brand: "Ubisoft",
    stat: "$500K+",
    statLabel: "Earned media. $0 ad spend.",
    outcome: "Community creator programs for 3 of Ubisoft\u2019s biggest IPs. 60M+ UGC total views.",
    href: "/case-studies#ubisoft"
  },
  {
    brand: "BlaBlaCar",
    stat: "0\u20921M",
    statLabel: "Members",
    outcome: "Community growth from zero to one million. From newcomer to advocate.",
    href: "/case-studies#blablacar"
  },
  {
    brand: "Ubisoft",
    stat: "10,000",
    statLabel: "US applications",
    outcome: "Built a fan advocacy program so compelling it sold itself. Launched at E3 to 10M viewers. Applications exceeded capacity.",
    href: "/case-studies#ubisoft"
  },
  {
    brand: "US Mobile",
    stat: "$32K",
    statLabel: "Superfan revenue in 3hrs",
    outcome: "Core community targeted and monetised for the first time. Complete sell-out.",
    href: "/case-studies#us-mobile"
  },
  {
    brand: "BlaBlaCar",
    stat: "\u20AC5",
    statLabel: "CAC",
    outcome: "Developed the brand\u2019s first-person narrative, shot on smartphones. One paid campaign across 22 markets. 3% CTR.",
    href: "/case-studies#blablacar"
  },
  {
    brand: "Azarus",
    stat: "90%",
    statLabel: "Engagement rate",
    outcome: "Turned 500K passive viewers into active participants through live overlay game design. Servers crashed from demand.",
    href: "/case-studies#azarus"
  },
  {
    brand: "Ubisoft",
    stat: "2.4M",
    statLabel: "Live watch hours",
    outcome: "2.4M live watch hours generated entirely through community, no paid amplification.",
    href: "/case-studies#ubisoft"
  },
  {
    brand: "US Mobile",
    stat: "55%",
    statLabel: "Video view-through rate on Meta",
    outcome: "Stunt creative designed for community buzz. Over half of all viewers watched the full ad.",
    href: "/case-studies#us-mobile"
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
    title: "CEO of BlaBlaCar",
    photo: null
  },
  {
    quote: "Placeholder \u2014 collect from US Mobile contact",
    name: "TBC",
    title: "US Mobile",
    photo: null
  },
  {
    quote: "Placeholder \u2014 collect from Ubisoft contact",
    name: "TBC",
    title: "Ubisoft",
    photo: null
  }
]

export default function HomePage() {
  const [shouldRenderPrism, setShouldRenderPrism] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const [resultsRef, resultsVisible] = useReveal()
  const [bioRef, bioVisible] = useReveal()
  const [testimonialsRef, testimonialsVisible] = useReveal()
  const [pathsRef, pathsVisible] = useReveal()
  const [faqRef, faqVisible] = useReveal()
  const [qualifyingRef, qualifyingVisible] = useReveal()
  const [ctaRef, ctaVisible] = useReveal()

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

  /* Testimonial carousel is manual — dots only, no auto-rotate */

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
                <a href={CALENDLY_URL} className="hero-cta" target="_blank" rel="noopener noreferrer">Book a call</a>
                <a href="#results" className="hero-cta-secondary" onClick={e => { e.preventDefault(); document.getElementById('results').scrollIntoView({ behavior: 'smooth' }) }}>Work with me</a>
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

      {/* ── RESULTS CARDS ── */}
      <section id="results" ref={resultsRef} className={`results-section reveal ${resultsVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="results-title">
            What happens<br />
            <span className="results-title--gradient">when you focus on your fans</span>
          </h2>
          <p className="results-intro">
            Your fans are there waiting, you just need to activate them.
          </p>
          <div
            className="case-ticker-wrap"
            ref={el => {
              if (!el) return
              const ticker = el.querySelector('.case-ticker')
              if (!ticker || ticker._dragInit) return
              ticker._dragInit = true

              let isDragging = false
              let startX = 0
              let currentOffset = 0

              const getAnimOffset = () => {
                const style = getComputedStyle(ticker)
                const matrix = new DOMMatrix(style.transform)
                return matrix.m41
              }

              el.addEventListener('mousedown', e => {
                isDragging = true
                startX = e.clientX
                currentOffset = getAnimOffset()
                ticker.style.animation = 'none'
                ticker.style.transform = `translateX(${currentOffset}px)`
                el.style.cursor = 'grabbing'
                e.preventDefault()
              })

              window.addEventListener('mousemove', e => {
                if (!isDragging) return
                const delta = e.clientX - startX
                ticker.style.transform = `translateX(${currentOffset + delta}px)`
              })

              window.addEventListener('mouseup', () => {
                if (!isDragging) return
                isDragging = false
                el.style.cursor = 'grab'
                const offset = getAnimOffset()
                const totalWidth = ticker.scrollWidth / 3
                const progress = ((-offset % totalWidth) + totalWidth) % totalWidth / totalWidth
                ticker.style.animation = ''
                ticker.style.animationDelay = `-${progress * 50}s`
              })
            }}
          >
            <div className="case-ticker">
              {[...caseStudyTeasers, ...caseStudyTeasers, ...caseStudyTeasers].map((cs, i) => (
                <BorderGlow
                  key={i}
                  edgeSensitivity={40}
                  glowColor="75 191 176"
                  backgroundColor="#141414"
                  borderRadius={12}
                  glowRadius={60}
                  glowIntensity={1}
                  animateOnHover={true}
                  colors={['#4BBFB0', '#E8A020', '#4BBFB0']}
                  style={{ flex: '0 0 320px' }}
                >
                  <div className="case-teaser-card" style={{ border: 'none', borderRadius: 11, height: '100%', boxSizing: 'border-box' }}>
                    <span className="case-teaser-brand">{cs.brand}</span>
                    <span className="case-teaser-stat">{cs.stat}</span>
                    <span className="case-teaser-stat-label">{cs.statLabel}</span>
                    <p className="case-teaser-outcome">{cs.outcome}</p>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
          <div className="results-actions">
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">Want the same results? Let&apos;s talk <span className="cta-arrow">&rarr;</span></a>
            <Link to="/case-studies" className="results-see-more">See more case studies <span className="cta-arrow">&rarr;</span></Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT (bio card) ── */}
      <section ref={bioRef} className={`about-brief reveal ${bioVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="bio-card">
            <figure className="bio-figure">
              <img src={`${import.meta.env.BASE_URL}laura-e3.jpg`} alt="Laura Cordrey speaking at E3" className="bio-photo" />
              <figcaption className="bio-caption">Public speaking, E3 2019</figcaption>
            </figure>
            <div className="bio-text">
              <h2>I design fan-powered growth systems.</h2>
              <p>
                I design fan-driven growth systems that turn customers into <strong>repeat revenue, retention, and organic acquisition</strong>. Not through paid media — through brand meaning, product experience, and participation that compounds.
              </p>
              <p>
                That&apos;s how I built the <strong>Fandom Flywheel&trade;</strong> — a five-stage methodology for turning attention into repeat behaviour, belonging, and advocacy. <strong>Even small shifts in retention, referral, and fan spend can unlock millions in earned media, new customers, and lifetime value.</strong>
              </p>
              <p>
                I developed my approach at <strong>Ubisoft, Amazon Games, BlaBlaCar</strong> and high-growth startups. Now I work with consumer brands across gaming, entertainment, wellness, beauty, and lifestyle — anywhere customers care enough to come back, participate, and bring others with them.
              </p>
              <p>
                Based in Paris, bilingual in English and French. Deep American market expertise since 2018 — from Ubisoft and Amazon Games to US-based startups.
              </p>
              <p className="bio-signature">Laura Cordrey</p>
            </div>
            <div className="bio-stats">
              {[
                { value: <>100M<sup className="bio-stat-plus">+</sup></>, label: "Community Footprint" },
                { value: "8",    label: "Brands Scaled" },
                { value: "22",   label: "Markets" },
                { value: "12",   label: "Years' Experience" },
              ].map((stat) => (
                <div className="bio-stat-item" key={stat.label}>
                  <span className="bio-stat-value">{stat.value}</span>
                  <span className="bio-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section ref={testimonialsRef} className={`testimonial-section reveal ${testimonialsVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="review-carousel">
            {testimonials.map((t, i) => (
              <blockquote key={i} className={`review-card ${i === activeIndex ? 'active' : ''}`}>
                <p className="review-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="review-author">
                  {t.photo ? (
                    <img src={t.photo} alt={t.name} className="review-photo" />
                  ) : (
                    <div className="review-photo-placeholder" aria-hidden="true" />
                  )}
                  <div className="review-info">
                    <span className="review-name">{t.name}</span>
                    <span className="review-title">{t.title}</span>
                  </div>
                </div>
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

      {/* ── QUALIFYING ── */}
      <section ref={qualifyingRef} className={`hp-qualifying bg-elevated reveal ${qualifyingVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="hp-qualifying-title">You might be here if you have&hellip;</h2>
          <ul className="hp-qualifying-list">
            <li>Loyal users, but growth still depends on paid spend</li>
            <li>Fans who love the product, but no system to activate them</li>
            <li>Flat retention despite strong product quality</li>
            <li>Engagement spikes around campaigns that then drop flat</li>
            <li>A community that isn&apos;t connected to your growth metrics</li>
          </ul>
          <div className="fpg-cta">
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">Sound familiar? Let&apos;s talk <span className="cta-arrow">&rarr;</span></a>
          </div>
        </div>
      </section>

      {/* ── TWO PATHS TEASE ── */}
      <section ref={pathsRef} className={`paths-tease reveal ${pathsVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Two ways I can help</h2>
          <div className="paths-grid">
            <Link to="/services" className="path-card">
              <span className="path-badge">Consulting</span>
              <h3>Fan-Powered Growth Engines</h3>
              <p>I build the systems that turn audiences into your most effective marketing channel — without paid media. Participation mechanics, creator-led growth, retention loops, brand storytelling. Ubisoft. BlaBlaCar. US Mobile. Azarus.</p>
              <span className="path-link">View services <span className="cta-arrow">&rarr;</span></span>
            </Link>
            <Link to="/flywheel" className="path-card path-card-highlight">
              <span className="path-badge">Methodology</span>
              <h3>The Fandom Flywheel&trade;</h3>
              <p>My proprietary five-stage system for turning passive audiences into active fans who drive repeat revenue and organic growth.</p>
              <span className="path-link">Explore the flywheel <span className="cta-arrow">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section ref={faqRef} className={`faq-section reveal ${faqVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="faq-title">Frequently asked questions</h2>
          <div className="faq-list">
            {[
              {
                q: "What is fan-powered growth?",
                a: "Fan-powered growth is a strategy that turns your most passionate users into your primary growth channel — driving referrals, retention and revenue through community systems rather than paid media."
              },
              {
                q: "How is this different from community management?",
                a: "Community management keeps people engaged. Fan-powered growth turns that engagement into measurable business outcomes — lower CAC, higher LTV, organic acquisition. It\u2019s a growth strategy, not a support function."
              },
              {
                q: "What industries do you work with?",
                a: "Gaming, entertainment, and consumer tech — brands with passionate user bases that aren\u2019t yet being leveraged for growth."
              },
              {
                q: "What\u2019s the Fandom Flywheel\u2122?",
                a: "My proprietary five-stage framework for mapping the fan journey from first touchpoint to active advocate, and turning the value in between into retention, referrals and revenue."
              },
              {
                q: "How long does a typical engagement take?",
                a: "It depends on the scope. A focused sprint can be 4\u20136 weeks. A full growth engine build is typically 3\u20136 months. We\u2019ll scope it together on a call."
              },
              {
                q: "Do you work with early-stage startups?",
                a: "Yes — if you have a product people love and you\u2019re ready to build the system that turns that love into growth. I\u2019ve worked with pre-seed to Series C."
              }
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section ref={ctaRef} className={`final-cta-section reveal ${ctaVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="final-cta-card">
            <h2 className="final-cta-headline">
              The love is there.{' '}
              <GradientText
                colors={['#F5F5F0', '#E8A020', '#F5F5F0']}
                animationSpeed={8}
              >
                Now turn it into growth.
              </GradientText>
            </h2>
            <p className="final-cta-text">
              Your most passionate users are your best untapped marketing channel. They refer friends, defend your brand, spend more — but only if you give them the system to do it. That&apos;s what I build.
            </p>
            <a href={CALENDLY_URL} className="final-cta-button" target="_blank" rel="noopener noreferrer">
              Book a free 30-min call
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <SiteFooter />

    </main>
  )
}
