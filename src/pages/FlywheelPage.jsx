import { useState, useEffect, useRef } from 'react'
import BorderGlow from '../components/BorderGlow'
import Grainient from '../components/Grainient'
import SiteFooter from '../components/SiteFooter'
import FanCalculator from '../components/FanCalculator'

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

const stages = [
  {
    name: "Activation",
    hook: "Give new audiences a clear reason to take the first meaningful action.",
    outcome: "First interactions are designed to feel like an invitation, not a campaign — so the relationship begins on their terms.",
  },
  {
    name: "Habit",
    hook: "Turn early engagement into repeat behaviour and return visits.",
    outcome: "Participation mechanics make coming back feel natural, not forced — turning casual users into regulars.",
  },
  {
    name: "Belonging",
    hook: "Create participation, recognition, and reasons to stay connected.",
    outcome: "They find their people, take on roles, and start contributing — because they feel ownership, not just access.",
  },
  {
    name: "Identity",
    hook: "Make the brand part of how customers express taste, status, or values.",
    outcome: "Status, recognition, and shared values create emotional loyalty that competitors can't undercut on price.",
  },
  {
    name: "Advocacy",
    hook: "Turn loyal customers into visible proof, referrals, and organic growth.",
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
            <h2 className="flywheel-hero-title fw-reveal">Turn attention into retention,<br />advocacy, and growth.</h2>
            <p className="flywheel-hero-sub fw-reveal">
              The Fandom Flywheel&trade; is a five-stage growth system that aligns brand, product, and participation to turn passive audiences into repeat customers, active communities, and organic growth.
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
                    <text x="80" y="124" textAnchor="middle" className="triad-sublabel-line1">Meaning, world,</text>
                    <text x="80" y="137" textAnchor="middle" className="triad-sublabel-line2">positioning</text>
                    {/* Node: Product */}
                    <circle cx="260" cy="112" r="65" fill="rgba(13,13,13,0.92)" stroke="rgba(232,160,32,0.4)" strokeWidth="1.5" />
                    <text x="260" y="106" textAnchor="middle" className="triad-label">Product</text>
                    <text x="260" y="124" textAnchor="middle" className="triad-sublabel-line1">Journey, habit,</text>
                    <text x="260" y="137" textAnchor="middle" className="triad-sublabel-line2">experience</text>
                    {/* Node: Participation */}
                    <circle cx="170" cy="268" r="65" fill="rgba(13,13,13,0.92)" stroke="rgba(196,166,232,0.4)" strokeWidth="1.5" />
                    <text x="170" y="262" textAnchor="middle" className="triad-label">Participation</text>
                    <text x="170" y="280" textAnchor="middle" className="triad-sublabel-line1">Community,</text>
                    <text x="170" y="293" textAnchor="middle" className="triad-sublabel-line2">advocacy, recommendation</text>
                  </svg>
                </div>
                <div className="editorial-text editorial-text--light">
                  <h3 className="editorial-title">Three layers. One system.</h3>
                  <p className="editorial-body">I work across brand, product, and participation because your customers don&apos;t experience your business in departments. They experience one joined-up journey.</p>
                  <p className="editorial-body editorial-body--standout">So when growth stalls, the issue is rarely isolated. The creator campaign drives awareness, but the landing experience feels off. The product gets attention, but there&apos;s no system bringing people back. Customers convert, but nothing turns that momentum into participation, loyalty, or recommendation.</p>
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
                  <p className="editorial-body">The Fandom Flywheel&trade; maps how customers move from first interaction to active advocacy. Each stage builds on the last — turning attention into repeat behaviour, repeat behaviour into belonging, and belonging into compounding growth.</p>
                  <p className="editorial-body editorial-body--standout">Every Fandom Flywheel&trade; is tailored to your business model, product roadmap, and available resources. I won&apos;t deliver a strategy your team can&apos;t actually execute.</p>
                </div>
              </div>

              {/* Card 3: Why Fans Move the Needle */}
              <div className="editorial-card fw-reveal">
                <div className="editorial-visual">
                  <div className="promise-stats-vertical">
                    <div className="promise-stat">
                      <span className="promise-stat-number">3&times;</span>
                      <span className="promise-stat-unit">more spend</span>
                      <span className="promise-stat-label">from your most engaged customers</span>
                      <span className="promise-stat-source">Rosetta Consulting</span>
                    </div>
                    <div className="promise-stat">
                      <span className="promise-stat-number">95%</span>
                      <span className="promise-stat-unit">more profit</span>
                      <span className="promise-stat-label">from just a 5% lift in retention</span>
                      <span className="promise-stat-source">Bain &amp; Company</span>
                    </div>
                    <div className="promise-stat">
                      <span className="promise-stat-number">92%</span>
                      <span className="promise-stat-unit">trust</span>
                      <span className="promise-stat-label">personal recommendations over ads</span>
                      <span className="promise-stat-source">Nielsen</span>
                    </div>
                    <div className="promise-stat">
                      <span className="promise-stat-number">5&times;</span>
                      <span className="promise-stat-unit">cheaper to retain</span>
                      <span className="promise-stat-label">than to acquire a new customer</span>
                      <span className="promise-stat-source">Bain / HBR</span>
                    </div>
                  </div>
                </div>
                <div className="editorial-text editorial-text--light">
                  <h3 className="editorial-title">The business case for fandom.</h3>
                  <p className="editorial-body">Superfans aren&apos;t born. They&apos;re built through repeated positive experiences, participation, and recognition. They spend more, stay longer, and bring others with them — making them one of the most valuable growth levers in any customer base.</p>
                  <p className="editorial-body editorial-body--standout">The Fandom Flywheel&trade; is designed to help brands build that behaviour intentionally — by increasing retention, deepening participation, and creating stronger recommendation loops over time. Goldman Sachs values the superfan economy at $4.2B+ and growing.</p>
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
                  <p className="editorial-body">Every stage of the Fandom Flywheel&trade; is designed to move a specific business metric — from retention and repeat purchase to referral, organic content, and discoverability.</p>
                  <p className="editorial-body editorial-body--standout">In the AI era, brand visibility is increasingly shaped by real-world proof: what customers say, where your brand gets discussed, and whether you generate signals worth citing. You can optimise your owned channels all you want — if no one is talking about you, that limits what compounds.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="container">
            <div className="flywheel-stage-cta fw-reveal">
              <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">See how this applies to your brand <span className="cta-arrow">&rarr;</span></a>
            </div>
          </div>

          <div className="container" style={{ marginTop: 36, marginBottom: 36 }}>
            <h2 className="section-title fw-reveal">Run the numbers.</h2>
            <p className="section-intro fw-reveal">See what even a modest improvement in retention could mean for your business.</p>
            <FanCalculator />
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

      {/* ── SERVICES ── */}
      <section className="flywheel-pricing">
        <div className="container">
          <h2 className="section-title fw-reveal">Ways to work together.</h2>
          <p className="section-intro fw-reveal">Not every brand needs the full flywheel from day one. Some need a diagnostic. Some need one lever fixed first. Others are ready to build the whole system.</p>
          <div className="flywheel-pricing-grid flywheel-pricing-grid--four">
            <div className="flywheel-pricing-card fw-reveal">
              <span className="flywheel-pricing-step">01</span>
              <h3>Diagnostic</h3>
              <span className="flywheel-pricing-price">from &euro;4K <span className="flywheel-tier-price-alt">/ $4.5K</span></span>
              <p>A strategic review of your current growth system across brand, product, retention, and participation. Clear priorities and a 90-day roadmap.</p>
              <span className="flywheel-pricing-tagline">Find out where you stand.</span>
            </div>
            <div className="flywheel-pricing-card fw-reveal">
              <span className="flywheel-pricing-step">02</span>
              <h3>Focused Sprint</h3>
              <span className="flywheel-pricing-price">from &euro;6K <span className="flywheel-tier-price-alt">/ $6.5K</span></span>
              <p>A fast-moving engagement built around one high-leverage problem — from recommendation systems and UGC programmes to retention strategy, launch mechanics, or brand activations.</p>
              <span className="flywheel-pricing-tagline">Fix one lever fast.</span>
            </div>
            <div className="flywheel-pricing-card flywheel-pricing-card--featured fw-reveal">
              <span className="flywheel-pricing-step">03</span>
              <h3>Flywheel Strategy</h3>
              <span className="flywheel-pricing-price">from &euro;15K <span className="flywheel-tier-price-alt">/ $16.5K</span></span>
              <p>A full Fandom Flywheel&trade; engagement — brand, product, and participation strategy designed around your business model, product roadmap, and growth goals.</p>
              <span className="flywheel-pricing-tagline">Design the system.</span>
            </div>
            <div className="flywheel-pricing-card fw-reveal">
              <span className="flywheel-pricing-step">04</span>
              <h3>Embedded Support</h3>
              <span className="flywheel-pricing-price">tailored</span>
              <p>Ongoing strategic support to help your team activate the system in practice across brand, product, CRM, and participation.</p>
              <span className="flywheel-pricing-tagline">Build it with me.</span>
            </div>
          </div>

          <div className="flywheel-bridge fw-reveal">
            <h3 className="flywheel-bridge-title">Need more than the strategy?</h3>
            <p className="flywheel-bridge-body">I also offer add-on support across messaging, campaign concepts, CRM journeys, creator and community mechanics, IRL activations, and team workshops.</p>
            <p className="flywheel-bridge-body">Every engagement starts with a conversation.</p>
          </div>

          <div className="flywheel-pricing-cta fw-reveal">
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              Book a free discovery call <span className="cta-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="flywheel-faq">
        <div className="container">
          <h2 className="section-title fw-reveal">Common questions</h2>
          <div className="flywheel-faq-grid">

            <details className="flywheel-faq-item fw-reveal">
              <summary>How do you measure organic growth?</summary>
              <p>Paid acquisition has perfect tracking and diminishing returns. Organic has imperfect tracking and compounding returns. The real question isn&apos;t &ldquo;can you track every referral?&rdquo; — it&apos;s &ldquo;can you afford to keep ignoring the cohort already driving 80% more spend?&rdquo;</p>
              <p>That said, we track more than you&apos;d think: referral links, branded search volume, UGC creation rates, NPS trends, community-attributed signups, and direct traffic growth. The Diagnostic establishes your measurement baseline from day one.</p>
            </details>

            <details className="flywheel-faq-item fw-reveal">
              <summary>How long before we see results?</summary>
              <p>Some levers move fast — activating existing superfans through better retention and engagement can show results within weeks. Growing the cohort and building referral loops takes longer, typically 3–6 months to see compounding effects.</p>
              <p>The Flywheel is designed as a system, not a campaign. Early wins build momentum for the bigger structural shifts.</p>
            </details>

            <details className="flywheel-faq-item fw-reveal">
              <summary>We already have a community team. How is this different?</summary>
              <p>Most community teams focus on engagement — keeping people active in a Discord or forum. The Fandom Flywheel&trade; connects that work to business outcomes. It maps every touchpoint across brand, product, and participation to specific revenue metrics.</p>
              <p>I work alongside your existing team, not instead of them. The Flywheel gives them a system to plug into.</p>
            </details>

            <details className="flywheel-faq-item fw-reveal">
              <summary>Is this only for gaming or entertainment brands?</summary>
              <p>The methodology was born in gaming and entertainment, but superfans exist in every category — wellness, beauty, lifestyle, consumer apps, DTC, fintech. Anywhere you have customers who care more than average, there&apos;s a flywheel to build.</p>
              <p>The principles are the same: identify, nurture, activate, grow. The mechanics adapt to your product, audience, and whether the experience is digital, physical, or both.</p>
            </details>

            <details className="flywheel-faq-item fw-reveal">
              <summary>What does the engagement actually look like?</summary>
              <p>It depends on where you are. A Diagnostic (from &euro;4K / $4.5K) is a 2-week strategic review. A Focused Sprint (from &euro;6K / $6.5K) tackles one growth lever over 2–3 weeks. A full Flywheel Strategy (from &euro;15K / $16.5K) is a 4–6 week engagement. Embedded support is ongoing and tailored.</p>
              <p>Every engagement starts with a conversation to figure out what you actually need.</p>
            </details>

            <details className="flywheel-faq-item fw-reveal">
              <summary>What if we&apos;re not ready for the full Flywheel?</summary>
              <p>That&apos;s fine — not every brand needs the full system from day one. I also take on focused sprints: recommendation system design, retention strategy, UGC programmes, launch mechanics, IRL activations, and workshops. Think of it as a way to solve one problem fast and test the approach before committing to the full build.</p>
            </details>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
