import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'

const Prism = lazy(() => import('./components/Prism'))
const FlywheelDiagram = lazy(() => import('./components/FlywheelDiagram'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

function App() {
  const [shouldRenderPrism, setShouldRenderPrism] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setShouldRenderPrism(true), { timeout: 2500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(() => setShouldRenderPrism(true), 1600)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <main>

      {/* ── HERO ───────────────────────────────── */}
      <section className="hero">
        <div className="hero-background" aria-hidden="true">
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
        <div className="container">
          <div className="hero-content">
            <div className="hero-credentials">
              <span>E3 Speaker</span>
              <span className="dot">·</span>
              Ubisoft
              <span className="dot">·</span>
              Amazon Games
              <span className="dot">·</span>
              BlaBlaCar
              <span className="dot">·</span>
              Since 2013
            </div>
            <h1>
              Tune your fans into<br />your next <span className="highlight">growth engine.</span>
            </h1>
            <p className="hero-subtitle">
              Most consumer brands are sitting on their most powerful growth asset and don&apos;t know it. I design the system that captures it.
            </p>
            <div className="hero-actions">
              <a href="#services" className="hero-cta">See How It Works</a>
              <a href={CALENDLY_URL} className="hero-cta-secondary" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPPORTUNITY ────────────────────────── */}
      <section className="opportunity-section">
        <div className="container">
          <div className="section-badge">The Opportunity</div>
          <h2 className="section-title">Your most powerful growth engine<br />is already inside your product.</h2>

          <div className="opportunity-body">
            <p>Right now, some of your users don&apos;t just use your product. They love it. They come back unprompted. They tell people. That energy is already there.</p>

            <p><strong>That gap is the opportunity.</strong> Most brands haven&apos;t built the layer that turns satisfaction into identity, and identity into advocacy. Yet.</p>

            <p>What that costs: higher CAC, faster churn, flat LTV — and none of the word-of-mouth or UGC that fans naturally generate when you build for them.</p>

            <p><strong>That&apos;s why I&apos;m here.</strong></p>

            <p>Gaming to consumer tech. Conglomerates to startups. North American-led, with global reach. I&apos;ve spent 13 years building fan-driven systems across all of it — and distilled everything that works into one offer.</p>
          </div>
        </div>
      </section>

      {/* ── FLYWHEEL ───────────────────────────── */}
      <section className="the-system">
        <div className="container">
          <div className="section-badge">The Methodology</div>
          <h2 className="section-title">The Fandom Flywheel™</h2>
          <p className="system-intro">
            A five-stage system designed to move users from first login to lifelong fan — and from fan to active advocate. Built on 13 years across gaming and consumer tech.
          </p>

          <div className="flywheel-diagram" aria-label="Fandom Flywheel Diagram">
            <Suspense fallback={<p className="diagram-placeholder">Loading flywheel...</p>}>
              <FlywheelDiagram />
            </Suspense>
          </div>

          <div className="stages-grid">
            <div className="stage-card">
              <span className="stage-number">01</span>
              <h3 className="stage-title">Activation</h3>
              <p className="stage-description">The hook that sticks</p>
              <ul className="stage-tactics">
                <li>Onboarding that creates habit</li>
                <li>First value moments</li>
                <li>Early engagement loops</li>
              </ul>
            </div>
            <div className="stage-card">
              <span className="stage-number">02</span>
              <h3 className="stage-title">Habit</h3>
              <p className="stage-description">Loops that compound</p>
              <ul className="stage-tactics">
                <li>Gamification mechanics</li>
                <li>Loyalty tiers and rewards</li>
                <li>Behavioural triggers</li>
              </ul>
            </div>
            <div className="stage-card">
              <span className="stage-number">03</span>
              <h3 className="stage-title">Belonging</h3>
              <p className="stage-description">Moments that bond</p>
              <ul className="stage-tactics">
                <li>Drops, events, challenges</li>
                <li>Brand narrative that invites in</li>
                <li>Shared fan milestones</li>
              </ul>
            </div>
            <div className="stage-card">
              <span className="stage-number">04</span>
              <h3 className="stage-title">Identity</h3>
              <p className="stage-description">Where UGC is born</p>
              <ul className="stage-tactics">
                <li>Fan recognition systems</li>
                <li>UGC infrastructure</li>
                <li>Community intelligence into product</li>
              </ul>
            </div>
            <div className="stage-card">
              <span className="stage-number">05</span>
              <h3 className="stage-title">Advocacy</h3>
              <p className="stage-description">Fans become growth</p>
              <ul className="stage-tactics">
                <li>Creator programs built to last</li>
                <li>Referral mechanics</li>
                <li>Brand-aligned ambassadors</li>
              </ul>
            </div>
          </div>

          <div className="creator-callout">
            <h3>Creators aren&apos;t a campaign. They&apos;re a community layer.</h3>
            <p>US creator economy ad spend is projected to reach <strong>$37 billion in 2025</strong>, up 26% year on year. Most brands treat creators as a one-post transaction. I build the programs that turn them into long-term brand partners — with shared values, generating content that compounds. I&apos;ve closed six-figure creator partnerships. That&apos;s a different capability to placing media.</p>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ───────────────────────── */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-badge">Why It Works</div>
          <h2 className="section-title">The mechanics are proven.<br />Most brands just haven&apos;t applied them.</h2>
          <p className="section-intro">
            I spent 13 years inside the industry that built these systems first. Here&apos;s the research confirming they work across every consumer category.
          </p>

          <div className="mechanics-simple-grid">
            <div className="mechanic-card">
              <p className="mechanic-name">Storytelling creates connection</p>
              <p className="mechanic-data">Brand storytelling is 22x more memorable and drives 30% higher customer retention</p>
            </div>
            <div className="mechanic-card">
              <p className="mechanic-name">Gamification drives engagement</p>
              <p className="mechanic-data">Progression mechanics drive 48% higher engagement and 22% better retention</p>
            </div>
            <div className="mechanic-card">
              <p className="mechanic-name">Loyalty programs drive revenue</p>
              <p className="mechanic-data">Loyalty members generate 12-18% more revenue per year than non-members</p>
            </div>
            <div className="mechanic-card">
              <p className="mechanic-name">UGC converts better than ads</p>
              <p className="mechanic-data">UGC increases product page conversions by 161% and revenue per visitor by 154%</p>
            </div>
            <div className="mechanic-card">
              <p className="mechanic-name">Referred customers compound</p>
              <p className="mechanic-data">Word-of-mouth users stay 2x longer and refer others at 4x the rate</p>
            </div>
            <div className="mechanic-card">
              <p className="mechanic-name">Superfans are your top line</p>
              <p className="mechanic-data">Top 15-20% spend 66-80% more and drive the majority of organic growth</p>
            </div>
          </div>

          <div className="sources-note">
            <p>Stanford, Harvard Business Review, Goldman Sachs, Nielsen, Luminate, Bazaarvoice (2023-2025)</p>
          </div>
        </div>
      </section>

      {/* ── PROOF — teal section ────────────────── */}
      <section className="proof-section">
        <div className="container">
          <div className="section-badge badge-teal">Proof</div>
          <h2 className="section-title">What this looks like in practice</h2>
          <p className="section-intro">Real work. Named companies. Numbers that are clean and attributable.</p>

          <div className="proof-grid">
            <div className="proof-card">
              <div className="proof-metric">6M</div>
              <div className="proof-unit">views · $0 spend</div>
              <p className="proof-description">
                At Ubisoft, I built the <strong>Siege Champions Program</strong> for Rainbow Six Siege — 200 members, 18 markets, 60%+ creators. First season: 6M views, 2.4M watch-hours, 393K interactions. Zero paid media.
              </p>
              <div className="proof-tag">Ubisoft · Rainbow Six Siege</div>
            </div>
            <div className="proof-card">
              <div className="proof-metric">$32K</div>
              <div className="proof-unit">revenue in 3 hours</div>
              <p className="proof-description">
                At <strong>US Mobile</strong>, I designed a limited-edition superfan product from scratch. 250 units at $129. Sold out in 3 hours. No advertising. Fan identity did the work.
              </p>
              <div className="proof-tag">US Mobile · Superfan Product</div>
            </div>
            <div className="proof-card">
              <div className="proof-metric">-50%</div>
              <div className="proof-unit">CAC on community ads</div>
              <p className="proof-description">
                At <strong>BlaBlaCar</strong>, community-first brand narrative — real riders, real stories — cut cost of acquisition by 50% versus the control. People respond to feeling seen, not sold to.
              </p>
              <div className="proof-tag">BlaBlaCar · Brand Storytelling</div>
            </div>
            <div className="proof-card">
              <div className="proof-metric">60M+</div>
              <div className="proof-unit">organic UGC views</div>
              <p className="proof-description">
                Across three <strong>Ubisoft</strong> programs — 500+ members, 18 markets, 90% engagement. Community intelligence from hundreds of thousands of players fed directly into Ghost Recon product decisions. Announced at E3.
              </p>
              <div className="proof-tag">Ubisoft · Delta Company · E3</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────── */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-badge">How We Work Together</div>
          <h2 className="section-title">Two ways in</h2>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-header">
                <span className="service-number">01</span>
                <h3 className="service-title">Diagnostic</h3>
                <p className="service-price">$15,000</p>
              </div>
              <div className="service-outcome">
                <p className="outcome-label">You will get</p>
                <p className="outcome-text">Clarity on where your fan value is leaking and a prioritised roadmap to capture it — with the business case to act.</p>
              </div>
              <p className="service-description">
                A 2-week structured audit across Brand, Product, and Community. I find exactly where the gaps are, what they&apos;re costing, and what to fix first.
              </p>
              <div className="service-deliverables">
                <p className="deliverable-label">Deliverables</p>
                <ul>
                  <li>Fandom Flywheel audit across all five stages</li>
                  <li>Gap analysis with commercial impact sizing</li>
                  <li>Priority roadmap ranked by ROI</li>
                  <li>90-min leadership presentation</li>
                </ul>
              </div>
              <p className="service-ideal-for">
                Best for brands who need clarity before committing to a larger engagement.
              </p>
            </div>

            <div className="service-card blueprint">
              <div className="service-header">
                <span className="service-number">02</span>
                <h3 className="service-title">Blueprint</h3>
                <p className="service-price">$45,000 – $65,000</p>
              </div>
              <div className="service-outcome">
                <p className="outcome-label">You will get</p>
                <p className="outcome-text">A complete fan system designed and ready to execute — every mechanic, every metric, every workflow. Built to run without ongoing dependency on me.</p>
              </div>
              <p className="service-description">
                A 6-8 week engagement to design your complete Fandom Flywheel from Activation through to Advocacy.
              </p>
              <div className="service-deliverables">
                <p className="deliverable-label">Deliverables</p>
                <ul>
                  <li>Complete five-stage Fandom Flywheel design</li>
                  <li>Creator and community program frameworks</li>
                  <li>Implementation roadmap with phases and owners</li>
                  <li>AI-enabled content and automation workflows</li>
                  <li>Success metrics and measurement framework</li>
                  <li>Cross-functional workshop sessions</li>
                </ul>
              </div>
              <p className="service-ideal-for">
                Best for brands with internal execution capacity who need expert system design.
              </p>
            </div>
          </div>

          <div className="services-cta">
            <p className="cta-text">Not sure where to start? Tell me what&apos;s breaking and we&apos;ll find the right fit.</p>
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">Book a Free 30-Min Call</a>
          </div>
          <div className="larger-engagements">
            <p>For larger engagements including full implementation, <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">let&apos;s talk.</a></p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="section-badge">Track Record</div>
          <h2 className="section-title">13 years. Two industries.<br />One rare combination.</h2>

          <div className="about-content">
            <div className="about-narrative">
              <p className="about-intro">
                I&apos;ve spent my career at the intersection of gaming and consumer tech — two industries that think about fan engagement in completely different ways. That gap is where the Fandom Flywheel came from.
              </p>
              <p className="about-paragraph">
                Gaming builds fan systems deliberately: progression mechanics, belonging moments, superfan activation, creator ecosystems, community intelligence feeding product decisions. I learned that at Ubisoft and Amazon Games — building programs across 18+ markets and presenting them on world stages.
              </p>
              <p className="about-paragraph">
                Consumer tech has the product sophistication. I brought the gaming lens to BlaBlaCar and a series of consumer startups, where the challenge was turning large user bases into advocates at scale.
              </p>
              <p className="about-paragraph">
                <strong>Most people live in one world. I&apos;ve built in both.</strong> I walk into a product team and speak their language, then turn to the marketing team and speak theirs — and show them how to connect the two into something that compounds.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-box">
                <h4>Where I&apos;ve Built</h4>
                <ul>
                  <li>Ubisoft — community, creators, product</li>
                  <li>Amazon Games — fan engagement</li>
                  <li>BlaBlaCar — growth and brand</li>
                  <li>Magic — fan app (founding team)</li>
                </ul>
              </div>
              <div className="highlight-box">
                <h4>Numbers</h4>
                <ul>
                  <li>100M+ reach generated</li>
                  <li>70M+ community footprint managed</li>
                  <li>60M+ organic UGC views</li>
                  <li>Six-figure creator partnerships</li>
                </ul>
              </div>
              <div className="highlight-box">
                <h4>Specialisms</h4>
                <ul>
                  <li>Gamified retention</li>
                  <li>Love-brand building</li>
                  <li>Long-term creator programs</li>
                  <li>Community intelligence into product</li>
                </ul>
              </div>
              <div className="highlight-box">
                <h4>How I Work</h4>
                <ul>
                  <li>Remote-first, US timezone friendly</li>
                  <li>Strategy through to execution</li>
                  <li>English / French bilingual</li>
                  <li>Based in Paris, clients globally</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="companies-worked">
            <p className="companies-label">Companies I&apos;ve worked with</p>
            <div className="company-logos">
              <div className="company-logo">Ubisoft</div>
              <div className="company-logo">Amazon Games</div>
              <div className="company-logo">BlaBlaCar</div>
              <div className="company-logo">US Mobile</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to tune your fans into<br />your next growth engine?</h2>
          <p>
            Let&apos;s talk about where your fan energy is going uncaptured and what it would look like to build the system that captures it.
          </p>
          <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
            Book a Free 30-Min Call
          </a>
        </div>
      </section>

    </main>
  )
}

export default App
