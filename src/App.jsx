import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'

const Prism = lazy(() => import('./components/Prism'))
const FlywheelDiagram = lazy(() => import('./components/FlywheelDiagram'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

function App() {
  const [shouldRenderPrism, setShouldRenderPrism] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => setShouldRenderPrism(true), { timeout: 2500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(() => setShouldRenderPrism(true), 1600)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <main>
      <section className="hero">
        <div className="hero-background" aria-hidden="true">
          <div className="hero-prism">
            {!shouldRenderPrism ? (
              <div className="hero-prism-placeholder" aria-hidden="true" />
            ) : (
              <Suspense fallback={<div className="hero-prism-placeholder" aria-hidden="true" />}>
                <Prism
                  animationType="3drotate"
                  timeScale={0.5}
                  height={3.5}
                  baseWidth={5.5}
                  scale={3.6}
                  hueShift={0}
                  colorFrequency={1}
                  noise={0}
                  glow={1}
                  suspendWhenOffscreen
                  maxFps={30}
                />
              </Suspense>
            )}
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>
              I design <span className="highlight">fandom</span> as a growth system
            </h1>
            <p className="hero-subtitle">
              Turn customers into <span className="highlight">fans</span> who come back repeatedly and bring others with them.
            </p>
            <a href="#services" className="hero-cta">See How It Works</a>
          </div>
        </div>
      </section>

      <section className="starting-point">
        <div className="container">
          <div className="section-badge">The Challenge</div>
          <h2 className="section-title">Which is your growth challenge?</h2>
          <p className="section-intro">
            Most brands face one of two growth challenges when it comes to their users:
            retention or advocacy.
          </p>

          <div className="paths-grid">
            <div className="path-card">
              <span className="path-badge">Retention</span>
              <h3 className="path-title">They don&apos;t stay</h3>
              <p className="path-description">
                Campaigns bring waves of new users but your product isn&apos;t sticky:
              </p>
              <ul className="symptoms-list">
                <li>Newcomers aren&apos;t finishing onboarding</li>
                <li>You&apos;re unable to secure purchases</li>
                <li>You&apos;re experiencing high churn</li>
                <li>You&apos;re paying to replace lost customers</li>
              </ul>
            </div>

            <div className="path-card">
              <span className="path-badge">Advocacy</span>
              <h3 className="path-title">They don&apos;t share</h3>
              <p className="path-description">
                Your product is sticky but no one is talking about you online:
              </p>
              <ul className="symptoms-list">
                <li>Low lifetime value despite decent retention</li>
                <li>Minimal user-generated content or social proof</li>
                <li>Low referral rates—customers don&apos;t recruit others</li>
                <li>You know you have superfans but you can&apos;t find them</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="the-system">
        <div className="container">
          <div className="section-badge">THE SOLUTION</div>
          <h2 className="section-title">The Fandom Flywheel</h2>
          <p className="system-intro">
            The Fandom Flywheel is the system I&apos;ve built to solve retention and advocacy together.
            Instead of siloed tactics, it designs Brand, Product, and Community to work as one, creating
            experiences that make customers stay and recruit others.
          </p>

          <div className="flywheel-diagram" aria-label="Fandom Flywheel Diagram">
            <Suspense fallback={<p className="diagram-placeholder">Loading flywheel diagram...</p>}>
              <FlywheelDiagram />
            </Suspense>
          </div>

          <div className="components-grid">
            <div className="component-card">
              <span className="component-number">01</span>
              <h3 className="component-title">Brand</h3>
              <p className="component-description">
                Creates participation moments that foster belonging
              </p>
              <div className="component-deliverables">
                <p className="deliverables-label">Tactics:</p>
                <ul>
                  <li>Storytelling and brand narrative (emotional connection)</li>
                  <li>Events and challenges (active participation)</li>
                  <li>Shared identity and community rituals</li>
                </ul>
              </div>
            </div>

            <div className="component-card">
              <span className="component-number">02</span>
              <h3 className="component-title">Product</h3>
              <p className="component-description">
                Builds retention loops that reward repeat behavior
              </p>
              <div className="component-deliverables">
                <p className="deliverables-label">Tactics:</p>
                <ul>
                  <li>Gamification and progression systems</li>
                  <li>Loyalty programs (points, tiers, rewards)</li>
                  <li>Personalization and habit formation</li>
                </ul>
              </div>
            </div>

            <div className="component-card">
              <span className="component-number">03</span>
              <h3 className="component-title">Community</h3>
              <p className="component-description">
                Activates advocates who create content and recruit others
              </p>
              <div className="component-deliverables">
                <p className="deliverables-label">Tactics:</p>
                <ul>
                  <li>UGC and creator programs</li>
                  <li>Referral programs (structured word-of-mouth)</li>
                  <li>Fan recognition and activation</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="section-badge">WHY IT WORKS</div>
          <h2 className="section-title">The science behind fandom mechanics</h2>
          <p className="section-intro">
            Here&apos;s the research that proves these mechanics drive measurable results:
          </p>

          <div className="mechanics-simple-grid">
            <div className="mechanic-card">
              <p className="mechanic-name">Storytelling creates connection</p>
              <p className="mechanic-data">Emotional hooks in your brand marketing are 22x more memorable than facts alone</p>
            </div>

            <div className="mechanic-card">
              <p className="mechanic-name">Gamification drives engagement</p>
              <p className="mechanic-data">Habit loops and rewards drive 48% higher engagement and 22% better retention</p>
            </div>

            <div className="mechanic-card">
              <p className="mechanic-name">Loyalty programs drive retention</p>
              <p className="mechanic-data">Members generate 12-18% more revenue growth per year than non-members</p>
            </div>

            <div className="mechanic-card">
              <p className="mechanic-name">UGC drives conversions</p>
              <p className="mechanic-data">UGC increases conversions 161% more than brand-owned media</p>
            </div>

            <div className="mechanic-card">
              <p className="mechanic-name">Referral programs create viral growth</p>
              <p className="mechanic-data">Referred customers have 37% higher retention and are 4X more likely to refer others</p>
            </div>

            <div className="mechanic-card">
              <p className="mechanic-name">Superfans are top spenders</p>
              <p className="mechanic-data">Top 15-20% spend 66-80% more and recruit friends at higher rates</p>
            </div>
          </div>

          <div className="sources-note">
            <p>
              *Research compiled from Stanford University, Harvard Business Review, Goldman Sachs,
              Nielsen, Luminate, Bazaarvoice, and peer-reviewed business studies (2023-2025).
            </p>
          </div>
        </div>
      </section>

      <section className="the-value">
        <div className="container">
          <div className="section-badge">WHY THIS MATTERS</div>
          <h2 className="section-title">The retention math that justifies everything</h2>

          <div className="value-content">
            <div className="stat-highlight">
              <p>A 5% increase in customer retention generates <strong>25-95% profit increase</strong></p>
              <p>Customer acquisition costs are <strong>4-6x higher</strong> than retention costs</p>
            </div>

            <h3 className="value-subtitle">What this means in real numbers:</h3>
            <p className="value-context">Starting point: $500k/year on acquisition, 40% retention</p>

            <div className="improvement-grid">
              <div className="improvement-card">
                <div className="card-header">IMPROVE 10 POINTS</div>
                <div className="card-body">
                  <p className="retention-change">40% → 50%</p>
                  <p className="value-amount">= $250k</p>
                  <p className="value-label">equivalent value</p>
                </div>
              </div>

              <div className="improvement-card highlighted">
                <div className="card-header">IMPROVE 20 POINTS</div>
                <div className="card-body">
                  <p className="retention-change">40% → 60%</p>
                  <p className="value-amount">= $500k</p>
                  <p className="value-label">equivalent value</p>
                </div>
              </div>
            </div>

            <div className="why-matters-box">
              <p className="box-intro">That&apos;s why the top 15-20% of your customers (fans) matter so much</p>
              <ul className="fan-benefits">
                <li>Spend 66-80% more</li>
                <li>Stay 2-3x longer</li>
                <li>Recruit others</li>
              </ul>
              <p className="box-conclusion">Activating them is the highest-leverage growth strategy available.</p>
            </div>

            <p className="value-conclusion">
              The Fandom Flywheel designs the system that makes this happen.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="section-badge">TRACK RECORD</div>
          <h2 className="section-title">Who I am</h2>

          <div className="about-content">
            <div className="about-narrative">
              <p className="about-intro">
                I&apos;ve spent 12+ years building fan engagement at scale—from Ubisoft&apos;s influencer
                programs generating 60M+ reach, to Amazon Games&apos; community platforms, to BlaBlaCar&apos;s
                growth mechanics.
              </p>

              <p className="about-paragraph">
                But here&apos;s what I learned: <strong>these companies built the pieces separately</strong>.
                Brand storytelling lived in marketing. Gamification lived in product. Community lived
                in a different silo. Each worked, but they weren&apos;t designed to reinforce each other.
              </p>

              <p className="about-paragraph">
                <strong>I saw what happens when you connect them.</strong> That&apos;s The Fandom Flywheel—the
                system I&apos;m building now, based on everything I learned about what works when Brand,
                Product, and Community are designed as one integrated system.
              </p>

              <p className="about-paragraph">
                I&apos;m not just a strategist—I&apos;m a <strong>builder</strong>. I&apos;m co-founding a fan app
                right now. I&apos;ve worked at giants (Ubisoft, Amazon Games) and startups that became
                unicorns (BlaBlaCar). I bring unique experience across North American AND European
                markets—rare in Europe, where most consultants only know one or the other.
              </p>

              <p className="about-paragraph">
                Now I design The Fandom Flywheel for product-led brands in gaming, beauty, wellness,
                and entertainment who want to turn customers into fans.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-box">
                <h4>Experience</h4>
                <ul>
                  <li>12+ years across tech and video games</li>
                  <li>60M+ reach through influencer partnerships</li>
                  <li>70M+ community footprint managed</li>
                  <li>60M+ organic UGC views generated</li>
                </ul>
              </div>

              <div className="highlight-box">
                <h4>What I Build</h4>
                <ul>
                  <li>Gamified retention loops</li>
                  <li>Love-brand building programs</li>
                  <li>UGC and creator activation systems</li>
                  <li>Influencer partnerships (six-figure deals)</li>
                </ul>
              </div>

              <div className="highlight-box">
                <h4>Background</h4>
                <ul>
                  <li>Co-founder of fan app (launching)</li>
                  <li>Based in Paris, work globally</li>
                  <li>US + European market expertise</li>
                  <li>English/French bilingual</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="companies-worked">
            <p className="companies-label">Companies I&apos;ve worked with:</p>
            <div className="company-logos">
              <div className="company-logo">Ubisoft</div>
              <div className="company-logo">Amazon Games</div>
              <div className="company-logo">BlaBlaCar</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-badge">HOW WE WORK TOGETHER</div>
          <h2 className="section-title">Three ways to work with me</h2>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-header">
                <span className="service-number">01</span>
                <h3 className="service-title">Diagnostic</h3>
                <p className="service-price">$15,000</p>
              </div>

              <p className="service-description">
                A 2-week deep dive into your retention systems. I audit your current
                mechanics across Brand, Product, and Community to identify what&apos;s working,
                what&apos;s missing, and where you&apos;re leaving value on the table.
              </p>

              <div className="service-deliverables">
                <p className="deliverable-label">You get:</p>
                <ul>
                  <li>Retention maturity assessment across all three systems</li>
                  <li>Gap analysis: where you&apos;re strong, where you&apos;re weak</li>
                  <li>Priority roadmap: highest-impact improvements ranked by ROI</li>
                  <li>90-minute presentation to leadership</li>
                </ul>
              </div>

              <p className="service-ideal-for">
                <strong>Best for:</strong> Brands who need clarity on where to invest
                next or validation before building a comprehensive system.
              </p>
            </div>

            <div className="service-card blueprint">
              <div className="service-header">
                <span className="service-number">02</span>
                <h3 className="service-title">Blueprint</h3>
                <p className="service-price">$45,000-$65,000</p>
              </div>

              <p className="service-description">
                A 6-8 week engagement to design your complete Fandom Flywheel. I map out
                the full system—every mechanic, every touchpoint, every metric—plus AI
                automation workflows, ready for your team to execute.
              </p>

              <div className="service-deliverables">
                <p className="deliverable-label">You get:</p>
                <ul>
                  <li>Complete Fandom Flywheel design: Brand, Product, Community mechanics</li>
                  <li>Detailed implementation roadmap with phases and timelines</li>
                  <li>AI automation suite (prompts, workflows, custom GPT)</li>
                  <li>Technical requirements and platform recommendations</li>
                  <li>Success metrics framework with targets and tracking</li>
                  <li>Workshop sessions with cross-functional teams</li>
                </ul>
              </div>

              <p className="service-ideal-for">
                <strong>Best for:</strong> Brands with internal execution capacity who
                need expert strategy, system design, and AI enablement.
              </p>
            </div>

            <div className="service-card build">
              <div className="service-header">
                <span className="service-number">03</span>
                <h3 className="service-title">Build</h3>
                <p className="service-price">$75,000-$120,000</p>
              </div>

              <p className="service-description">
                A 3-6 month engagement where I design AND execute your Fandom Flywheel.
                From strategy through launch, I work alongside your teams to build, test,
                and optimize the complete system with AI-powered automation.
              </p>

              <div className="service-deliverables">
                <p className="deliverable-label">You get:</p>
                <ul>
                  <li>Everything in Blueprint, plus hands-on execution</li>
                  <li>Program launches: gamification, UGC campaigns, creator programs</li>
                  <li>AI workflow implementation and team training</li>
                  <li>Content creation: storylines, challenges, community events</li>
                  <li>Platform setup and integration with existing tools</li>
                  <li>Ongoing optimization and support</li>
                </ul>
              </div>

              <p className="service-ideal-for">
                <strong>Best for:</strong> Brands who want a complete solution—strategy,
                execution, AI automation, and ongoing support—without adding headcount.
              </p>
            </div>
          </div>

          <div className="services-cta">
            <p className="cta-text">
              Not sure which is right for you? Let&apos;s talk through your situation and find
              the best fit.
            </p>
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Ready to design your retention system?</h2>
          <p>
            Let&apos;s talk about your retention challenge and build a Fandom Flywheel that turns your
            customers into fans.
          </p>
          <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
            Schedule a Call
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
