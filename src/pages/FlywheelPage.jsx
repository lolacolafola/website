import { useState, useEffect, useRef } from 'react'
import BorderGlow from '../components/BorderGlow'
import Grainient from '../components/Grainient'
import SiteFooter from '../components/SiteFooter'
import FanCalculator from '../components/FanCalculator'

const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

const caseStudyTeasers = [
  {
    brand: "Ubisoft",
    stat: <>50M<sup className="bio-stat-plus">+</sup></>,
    statLabel: "organic views",
    outcome: "$0 ad spend. Fans became the marketing channel. Powered by UGC.",
    href: "/case-studies#ubisoft"
  },
  {
    brand: "BlaBlaCar",
    stat: "\u20AC5",
    statLabel: "CAC",
    outcome: "Through targeted storytelling to bring audiences inside the car.",
    href: "/case-studies#blablacar"
  },
  {
    brand: "US Mobile",
    stat: "$32K",
    statLabel: "revenue in 3 hours",
    outcome: "Core community targeted and monetised for the first time.",
    href: "/case-studies#us-mobile"
  },
  {
    brand: "Azarus",
    stat: "90%",
    statLabel: "engagement rate",
    outcome: "Live event game design. 500K peak viewers. Servers crashed.",
    href: "/case-studies#azarus"
  }
]

const stages = [
  {
    name: "Activation",
    hook: "Help new audiences to take their first action.",
    outcome: "First interactions are designed to feel like an invitation, not a campaign — so the relationship begins on their terms.",
  },
  {
    name: "Habit",
    hook: "Turn one-time engagement into repeat behaviour.",
    outcome: "Participation mechanics make coming back feel natural, not forced — turning casual users into regulars.",
  },
  {
    name: "Belonging",
    hook: "Move fans from audience to community.",
    outcome: "They find their people, take on roles, and start contributing — because they feel ownership, not just access.",
  },
  {
    name: "Identity",
    hook: "Make your brand part of how fans see themselves.",
    outcome: "Status, recognition, and shared values create emotional loyalty that competitors can't undercut on price.",
  },
  {
    name: "Advocacy",
    hook: "Fans become the growth channel, bringing others with them.",
    outcome: "They create content, recruit others, and defend the brand — without being asked, without being paid.",
  }
]

export default function FlywheelPage() {
  const [openStage, setOpenStage] = useState(null)
  const stagesRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    // Small delay to ensure DOM is fully rendered after HMR
    const timer = setTimeout(() => {
      document.querySelectorAll('.fw-reveal').forEach((el) => observer.observe(el))
    }, 100)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <main>

      {/* ── METHODOLOGY HERO + STAGES ── */}
      <section className="the-system">
        {/* Grainient fills entire section */}
        <div className="flywheel-grainient-wrap">
          <Grainient
            color1="#1A6B5A"
            color2="#0D0D0D"
            color3="#4A3000"
            timeSpeed={0.15}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={4}
            warpSpeed={1.5}
            warpAmplitude={60}
            blendAngle={0}
            blendSoftness={0.1}
            rotationAmount={400}
            noiseScale={2}
            grainAmount={0.08}
            grainScale={2}
            grainAnimated={false}
            contrast={1.3}
            gamma={1}
            saturation={1.2}
            centerX={0}
            centerY={0}
            zoom={0.8}
          />
          <div className="flywheel-grainient-overlay" />
        </div>

        <div className="flywheel-content">
          <div className="container">
            <div className="section-badge fw-reveal">The Methodology</div>
            <h2 className="flywheel-hero-title fw-reveal">Turn your fans into<br />your growth engine.</h2>
            <p className="flywheel-hero-sub fw-reveal">
              The Fandom Flywheel&trade; is a five-stage system that turns passive audiences into superfans who drive retention, revenue, and organic growth.
            </p>
          </div>

          {/* ── Editorial cards ── */}
          <div className="container">
            <div className="editorial-grid">

              {/* Card 1: The Triad */}
              <div className="editorial-card fw-reveal">
                <div className="editorial-visual">
                  <svg className="triad-svg" viewBox="0 0 340 345" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="flow-bp" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4BBFB0" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#4BBFB0" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#E8A020" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id="flow-pc" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#E8A020" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#E8A020" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#C4A6E8" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id="flow-cb" x1="50%" y1="100%" x2="50%" y2="0%">
                        <stop offset="0%" stopColor="#C4A6E8" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#C4A6E8" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#4BBFB0" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {/* Connection lines */}
                    <path d="M 105 100 C 135 45, 215 45, 245 100" stroke="url(#flow-bp)" strokeWidth="2" className="triad-line" />
                    <path d="M 272 135 C 290 200, 235 275, 175 288" stroke="url(#flow-pc)" strokeWidth="2" className="triad-line triad-line--delay1" />
                    <path d="M 165 288 C 105 275, 50 200, 68 135" stroke="url(#flow-cb)" strokeWidth="2" className="triad-line triad-line--delay2" />
                    {/* Node: Brand */}
                    <circle cx="80" cy="112" r="65" fill="rgba(13,13,13,0.92)" stroke="rgba(75,191,176,0.4)" strokeWidth="1.5" />
                    <text x="80" y="106" textAnchor="middle" className="triad-label">Brand</text>
                    <text x="80" y="124" textAnchor="middle" className="triad-sublabel-line1">Identity</text>
                    <text x="80" y="137" textAnchor="middle" className="triad-sublabel-line2">&amp; experience</text>
                    {/* Node: Product */}
                    <circle cx="260" cy="112" r="65" fill="rgba(13,13,13,0.92)" stroke="rgba(232,160,32,0.4)" strokeWidth="1.5" />
                    <text x="260" y="106" textAnchor="middle" className="triad-label">Product</text>
                    <text x="260" y="124" textAnchor="middle" className="triad-sublabel-line1">Journey</text>
                    <text x="260" y="137" textAnchor="middle" className="triad-sublabel-line2">&amp; gamification</text>
                    {/* Node: Community */}
                    <circle cx="170" cy="268" r="65" fill="rgba(13,13,13,0.92)" stroke="rgba(196,166,232,0.4)" strokeWidth="1.5" />
                    <text x="170" y="262" textAnchor="middle" className="triad-label">Community</text>
                    <text x="170" y="280" textAnchor="middle" className="triad-sublabel-line1">Retention</text>
                    <text x="170" y="293" textAnchor="middle" className="triad-sublabel-line2">&amp; advocacy</text>
                  </svg>
                </div>
                <div className="editorial-text editorial-text--light">
                  <h3 className="editorial-title">Three pillars. One system.</h3>
                  <p className="editorial-body">I work across brand, product, and community holistically, because they&apos;re never separate for your fans. Your audience doesn&apos;t see three departments — they see one experience.</p>
                  <p className="editorial-body editorial-body--standout">So when your influencer budget is in the millions, are you looking at the full picture? The brand fit from awareness to consideration to conversion. Whether the creator&apos;s voice matches what that prospect actually lands on. And if they do convert, how you&apos;re keeping them engaged and coming back.</p>
                </div>
              </div>

              {/* Card 2: The Five Stages */}
              <div className="editorial-card editorial-card--reverse fw-reveal">
                <div className="editorial-visual">
                  <div className="stages-visual">
                    {stages.map((stage, i) => (
                      <div key={i} className="stages-visual-row">
                        <span className="stages-visual-num">{'0' + (i + 1)}</span>
                        <div>
                          <span className="stages-visual-name">{stage.name}</span>
                          <span className="stages-visual-hook">{stage.hook}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="editorial-text editorial-text--light">
                  <h3 className="editorial-title">Five stages. One flywheel.</h3>
                  <p className="editorial-body">The Fandom Flywheel&trade; maps every fan from first interaction to active advocate. Each stage builds on the last — turning passive audiences into repeat behaviour, repeat behaviour into belonging, and belonging into organic growth that compounds over time.</p>
                  <p className="editorial-body editorial-body--standout">Every Fandom Flywheel&trade; is tailored to your business plan, product roadmap, and available marketing budget. I won&apos;t deliver a plan you can&apos;t use.</p>
                </div>
              </div>

              {/* Card 3: Why Fans Move the Needle */}
              <div className="editorial-card fw-reveal">
                <div className="editorial-visual">
                  <div className="promise-stats-vertical">
                    <div className="promise-stat">
                      <span className="promise-stat-number">30–70%</span>
                      <span className="promise-stat-label">of revenue from just 10% of customers</span>
                      <span className="promise-stat-source">Eddie Yoon / HBR</span>
                    </div>
                    <div className="promise-stat">
                      <span className="promise-stat-number">80%</span>
                      <span className="promise-stat-label">more spent by superfans vs average customers</span>
                      <span className="promise-stat-source">Luminate</span>
                    </div>
                    <div className="promise-stat">
                      <span className="promise-stat-number">4&times;</span>
                      <span className="promise-stat-label">more likely to convert when referred by a fan</span>
                      <span className="promise-stat-source">Nielsen</span>
                    </div>
                    <div className="promise-stat">
                      <span className="promise-stat-number">5–7&times;</span>
                      <span className="promise-stat-label">cheaper to retain than replace</span>
                      <span className="promise-stat-source">Bain &amp; Company</span>
                    </div>
                  </div>
                </div>
                <div className="editorial-text editorial-text--light">
                  <h3 className="editorial-title">The business case for superfandom.</h3>
                  <p className="editorial-body">Goldman Sachs values the superfan economy at $4.2 billion and growing. Superfans aren&apos;t born, they&apos;re made. They spend more, stay longer, and bring others with them. They&apos;re your most valuable cohort, and the one worth investing in.</p>
                  <p className="editorial-body editorial-body--standout">The Fandom Flywheel&trade; is how you systematically turn users into fans, and fans into the growth engine behind your brand.</p>
                </div>
              </div>

              {/* Card 4: The KPIs */}
              <div className="editorial-card editorial-card--reverse fw-reveal">
                <div className="editorial-visual editorial-visual--kpi">
                  <div className="kpi-columns">
                    <div className="kpi-column">
                      <div className="kpi-column-bar kpi-column-bar--gold" />
                      <h4 className="kpi-column-title kpi-column-title--gold">Direct improvements</h4>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--down">↓</span><span className="kpi-metric">Churn</span></div>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--up">↑</span><span className="kpi-metric">LTV</span></div>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--up">↑</span><span className="kpi-metric">Repeat purchase rate</span></div>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--up">↑</span><span className="kpi-metric">Referral rate</span></div>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--up">↑</span><span className="kpi-metric">UGC &amp; organic content</span></div>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--up">↑</span><span className="kpi-metric">NPS</span></div>
                    </div>
                    <div className="kpi-column">
                      <div className="kpi-column-bar kpi-column-bar--teal" />
                      <h4 className="kpi-column-title kpi-column-title--teal">Downstream impact</h4>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--down">↓</span><span className="kpi-metric">CAC pressure</span></div>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--up">↑</span><span className="kpi-metric">Brand search &amp; awareness</span></div>
                      <div className="kpi-row"><span className="kpi-arrow kpi-arrow--up">↑</span><span className="kpi-metric">AI discoverability</span></div>
                    </div>
                  </div>
                </div>
                <div className="editorial-text editorial-text--light">
                  <h3 className="editorial-title">Built for the metrics that matter.</h3>
                  <p className="editorial-body">Every stage of the Fandom Flywheel&trade; is designed to move a specific business metric. Lower acquisition costs. Higher retention. More organic content from the people who love what you do.</p>
                  <p className="editorial-body editorial-body--standout">In the world of AI, this matters more than ever. You can optimise your owned channels all you want — you need real people talking about you to show up in LLM answers.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="container">
            <div className="flywheel-stage-cta fw-reveal">
              <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">See how this applies to your brand <span className="cta-arrow">&rarr;</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="flywheel-results">
        <div className="container">
          <h2 className="section-title fw-reveal">The system in action.</h2>
          <p className="section-intro fw-reveal">Real results from brands that built their flywheel.</p>
        </div>
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
                backgroundColor="#141414"
                borderRadius={12}
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
      </section>

      {/* ── CALCULATOR ── */}
      <section className="flywheel-calculator">
        <div className="container">
          <FanCalculator />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="flywheel-pricing">
        <div className="container">
          <h2 className="section-title fw-reveal">Ready to build yours?</h2>
          <p className="section-intro fw-reveal">Every Fandom Flywheel&trade; is custom-built. Here&apos;s how engagements typically work.</p>
          <div className="flywheel-pricing-grid flywheel-pricing-grid--three">
            <div className="flywheel-pricing-card fw-reveal">
              <span className="flywheel-pricing-step">01</span>
              <h3>Diagnostic</h3>
              <span className="flywheel-pricing-price">$15K</span>
              <p>A full audit of your fan ecosystem, scored across all 5 stages with a prioritised roadmap.</p>
              <span className="flywheel-pricing-tagline">Find out where you stand.</span>
            </div>
            <div className="flywheel-pricing-card flywheel-pricing-card--featured fw-reveal">
              <span className="flywheel-pricing-step">02</span>
              <h3>Blueprint</h3>
              <span className="flywheel-pricing-price">from $45K</span>
              <p>Complete system design — strategy, mechanics, and a launch plan tailored to your brand.</p>
              <span className="flywheel-pricing-tagline">Design the system.</span>
            </div>
            <div className="flywheel-pricing-card fw-reveal">
              <span className="flywheel-pricing-step">03</span>
              <h3>Activation</h3>
              <span className="flywheel-pricing-price">tailored</span>
              <p>Hands-on implementation, embedded with your team to build and launch the flywheel.</p>
              <span className="flywheel-pricing-tagline">Build it with me.</span>
            </div>
          </div>

          <div className="flywheel-bridge fw-reveal">
            <h3 className="flywheel-bridge-title">Not ready for a full flywheel?</h3>
            <p className="flywheel-bridge-body">Not every brand needs the full system. I also take on focused projects — from fan strategy workshops and community audits to UGC programmes and campaign design.</p>
            <p className="flywheel-bridge-body">Every engagement starts with a conversation.</p>
          </div>

          <div className="flywheel-pricing-cta fw-reveal">
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              Book a free discovery call <span className="cta-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
