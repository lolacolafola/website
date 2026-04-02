import { Link } from 'react-router-dom'
import BorderGlow from '../components/BorderGlow'
import SiteFooter from '../components/SiteFooter'

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
    hook: "Get passive audiences to take their first action.",
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
    hook: "Fans become the growth channel.",
    outcome: "They create content, recruit others, and defend the brand — without being asked, without being paid.",
  }
]

export default function FlywheelPage() {
  return (
    <main>

      {/* ── METHODOLOGY INTRO ── */}
      <section className="the-system">
        <div className="container">
          <div className="section-badge">The Methodology</div>
          <h2 className="section-title">Turn your fans into<br />your next growth engine.</h2>
          <p className="system-intro">
            The Fandom Flywheel&trade; is a five-stage system that turns passive audiences into active fans who drive retention, revenue, and organic growth.
          </p>
          <p className="system-intro system-intro--sub">
            I audit across brand, product, and community — because they feed into each other — and deliver strategy that works across all three. Every flywheel is tailored to your business plan, product and marketing roadmap, and available budget.
          </p>

          <div className="flywheel-stages">
            {stages.map((stage, i) => (
              <div key={i} className="flywheel-stage-row">
                <span className="flywheel-stage-number">{i + 1}</span>
                <div>
                  <h3 className="flywheel-stage-name">{stage.name}</h3>
                  <p className="flywheel-stage-hook">{stage.hook}</p>
                  <p className="flywheel-stage-outcome">{stage.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flywheel-stage-cta">
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">See how this applies to your brand <span className="cta-arrow">&rarr;</span></a>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="flywheel-results">
        <div className="container">
          <h2 className="section-title">The system in action.</h2>
          <p className="section-intro">Real results from brands that built their flywheel.</p>
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

      {/* ── PRICING ── */}
      <section className="flywheel-pricing">
        <div className="container">
          <h2 className="section-title">Ready to build yours?</h2>
          <p className="section-intro">Every flywheel is custom-built. Here&apos;s how engagements typically start.</p>
          <div className="flywheel-pricing-grid">
            <div className="flywheel-pricing-card">
              <h3>Diagnostic</h3>
              <span className="flywheel-pricing-price">$15K</span>
              <p>A full audit of your fan ecosystem — scored across all 5 stages with a prioritised roadmap.</p>
            </div>
            <div className="flywheel-pricing-card flywheel-pricing-card--featured">
              <h3>Blueprint</h3>
              <span className="flywheel-pricing-price">from $45K</span>
              <p>Complete system design — strategy, mechanics, and a 90-day launch plan tailored to your brand.</p>
            </div>
          </div>
          <div className="flywheel-pricing-cta">
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              Book a discovery call <span className="cta-arrow">&rarr;</span>
            </a>
          </div>
          <div className="larger-engagements">
            <p>Looking for something else? <Link to="/services">View all services <span className="cta-arrow">&rarr;</span></Link></p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
