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
              Using behavioral psychology, retention mechanics, and AI-enabled automation.
            </p>
            <a href="#services" className="hero-cta hero-cta-primary">See How It Works</a>
          </div>
        </div>
      </section>

      <section className="starting-point">
        <div className="container">
          <div className="section-badge">WHERE YOU ARE</div>
          <h2 className="section-title">Two paths, same destination</h2>
          <p className="section-intro">
            Most brands arrive here from one of two starting points. Which sounds like you?
          </p>

          <div className="paths-grid">
            <div className="path-card stay-path">
              <span className="path-badge">PATH ONE</span>
              <h3 className="path-title">Make them stay</h3>
              <p className="path-description">
                Your acquisition is working. Influencer campaigns drive spikes. Ads bring traffic.
                But within days, it all dies back to baseline.
              </p>
              <ul className="symptoms-list">
                <li>Customers buy once, then disappear</li>
                <li>Community feels hollow (lurkers, not participants)</li>
                <li>You&apos;re constantly chasing new users to replace churned ones</li>
                <li>Growth feels like running on a treadmill</li>
              </ul>
            </div>

            <div className="path-card share-path">
              <span className="path-badge">PATH TWO</span>
              <h3 className="path-title">Make them share</h3>
              <p className="path-description">
                You have loyal customers who love your product. But they&apos;re silent. They don&apos;t
                create content, recruit friends, or amplify your message.
              </p>
              <ul className="symptoms-list">
                <li>Low referral rates despite high satisfaction</li>
                <li>Minimal user-generated content</li>
                <li>Community exists but doesn&apos;t activate</li>
                <li>You&apos;re leaving advocacy value on the table</li>
              </ul>
            </div>
          </div>

          <div className="convergence">
            <p className="convergence-text">Different challenges, same solution: fandom mechanics that make customers feel valued, connected, and part of something bigger.</p>
          </div>
        </div>
      </section>

      <section className="why-it-works">
        <div className="container">
          <div className="section-badge">WHY IT WORKS</div>
          <h2 className="section-title">The science behind fandom mechanics</h2>
          <p className="section-intro">Why do customers become fans? Here&apos;s what the research shows:</p>

          <div className="principles-grid">
            <div className="principle-card">
              <h3 className="principle-title">Early Participation Predicts Retention</h3>
              <p className="principle-stat">
                Users who engage in the first 7 days are 3-5x more likely to still be
                active after 6 months.
              </p>
            </div>

            <div className="principle-card">
              <h3 className="principle-title">Superfans Drive Disproportionate Value</h3>
              <p className="principle-stat">
                The top 15-20% most engaged customers spend 66-80% more than average,
                create the majority of content, and recruit at higher rates.
              </p>
            </div>

            <div className="principle-card">
              <h3 className="principle-title">UGC Converts Better</h3>
              <p className="principle-stat">
                User-generated content increases product page conversions by 161%.
                Customers trust peer recommendations 92% more than brand messages.
              </p>
            </div>

            <div className="principle-card">
              <h3 className="principle-title">Storytelling Builds Brand Love</h3>
              <p className="principle-stat">
                Stories are 22x more memorable than facts and create emotional bonds.
                Customers who connect with your brand story have 30% higher retention
                and become vocal advocates.
              </p>
            </div>

            <div className="principle-card">
              <h3 className="principle-title">Gamification Builds Habits</h3>
              <p className="principle-stat">
                Well-designed gamification increases engagement by 48% and retention by
                22-30%, tapping into intrinsic motivation rather than external rewards.
              </p>
            </div>

            <div className="principle-card">
              <h3 className="principle-title">Retention Compounds Over Time</h3>
              <p className="principle-stat">
                A 5% increase in retention can generate 25-95% profit increase. Customer
                acquisition costs are 4-6x higher than retention costs.
              </p>
            </div>
          </div>

          <p className="bridge-text">The real power comes from connecting these mechanics into one system.</p>
          <div className="section-footer-note">
            <p>
              *Research compiled from Stanford University, Harvard Business Review, Goldman Sachs,
              Nielsen, Luminate, Bazaarvoice, and peer-reviewed business studies (2023-2025).
            </p>
          </div>
        </div>
      </section>

      <section className="the-system">
        <div className="container">
          <div className="section-badge">THE SYSTEM</div>
          <h2 className="section-title">The Fandom Flywheel</h2>
          <p className="system-intro">
            The solution is The Fandom Flywheel: three interconnected mechanics that turn
            customers into content creators and recruiters. When Brand, Product, and Community
            work together, customers don&apos;t just return, they bring others with them.
          </p>

          <div className="diagram-slot" aria-label="Fandom Flywheel Diagram">
            <Suspense fallback={<div className="diagram-loading">Loading diagram...</div>}>
              <FlywheelDiagram />
            </Suspense>
          </div>

          <div className="components-grid">
            <div className="component-card">
              <span className="component-number">1</span>
              <h3 className="component-title">Brand</h3>
              <p className="component-description">
                Creates participation moments through storytelling, events, and challenges.
                This is where customers first engage beyond the transaction.
              </p>
              <p className="component-data">
                Storytelling increases retention from 10% to 70% and makes messages 22x
                more memorable. Events and challenges create 30% higher customer retention.
              </p>
            </div>

            <div className="component-card">
              <span className="component-number">2</span>
              <h3 className="component-title">Product</h3>
              <p className="component-description">
                Builds retention loops through gamification, progression systems, and rewards.
                This is where participation becomes a habit.
              </p>
              <p className="component-data">
                Gamification increases engagement by 48% and retention by 22-30%. First 7
                days of engagement predicts 3-5x higher 6-month retention.
              </p>
            </div>

            <div className="component-card">
              <span className="component-number">3</span>
              <h3 className="component-title">Community</h3>
              <p className="component-description">
                Activates advocates through UGC programs, creator tiers, and social recognition.
                This is where customers become creators and recruiters.
              </p>
              <p className="component-data">
                UGC increases conversions by 161%. Top 15-20% of engaged users spend 66-80%
                more and create majority of content. Peer recommendations are trusted 92% more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-badge">HOW WE WORK TOGETHER</div>
          <h2 className="section-title">Three ways to work with me</h2>
          <p className="section-intro">
            Whether you need a quick diagnostic or a complete system build, I meet you where
            you are. Each engagement is designed to deliver immediate clarity and measurable results.
          </p>

          <div className="services-grid">
            <div className="service-card diagnostic">
              <div className="service-header">
                <span className="service-number">01</span>
                <h3 className="service-title">Diagnostic</h3>
                <p className="service-price">$15,000</p>
              </div>

              <p className="service-description">
                A 2-week deep dive into your retention systems. I audit your current mechanics
                across Brand, Product, and Community to identify what&apos;s working, what&apos;s missing,
                and where you&apos;re leaving value on the table.
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
                <strong>Best for:</strong> Brands who need clarity on where to invest next or
                validation before building a comprehensive system.
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
                the full system, every mechanic, every touchpoint, every metric, plus AI
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
                <strong>Best for:</strong> Brands with internal execution capacity who need
                expert strategy, system design, and AI enablement.
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
                <strong>Best for:</strong> Brands who want a complete solution: strategy,
                execution, AI automation, and ongoing support, without adding headcount.
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

      <section className="about-section">
        <div className="container">
          <div className="section-badge">TRACK RECORD</div>
          <h2 className="section-title">Who I am</h2>

          <div className="about-content">
            <div className="about-narrative">
              <p className="about-intro">
                I&apos;ve spent the last decade building fandom systems at scale: gamification
                programs with millions of users, influencer campaigns with six-figure budgets,
                community platforms driving measurable retention.
              </p>

              <p className="about-paragraph">
                At <strong>Ubisoft</strong>, I managed influencer partnerships and community
                programs for major game launches, working with budgets over $100k to drive
                engagement and retention. At <strong>Amazon Games</strong>, I led marketing
                for New World and developed community-driven growth strategies. At
                <strong> BlaBlaCar</strong>, I built retention mechanics for one of Europe&apos;s
                largest ridesharing platforms.
              </p>

              <p className="about-paragraph">
                What I learned: The brands that win don&apos;t just acquire customers, they turn
                them into fans. They build systems where Brand creates participation moments,
                Product builds retention loops, and Community activates advocates. When these
                three work together, customers don&apos;t just stay, they recruit others.
              </p>

              <p className="about-paragraph">
                That&apos;s <strong>The Fandom Flywheel</strong>. It&apos;s what I built at Ubisoft,
                Amazon, and BlaBlaCar. Now I build it for product-led brands in gaming,
                beauty, wellness, and entertainment who want to turn one-time buyers into
                long-term fans. I don&apos;t just design retention programs, I architect behavioral
                systems using proven frameworks and AI-enabled automation that make execution
                10x faster.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-box">
                <h4>Experience</h4>
                <ul>
                  <li>10+ years in retention marketing</li>
                  <li>Managed $100k+ influencer campaigns</li>
                  <li>Built programs with millions of users</li>
                  <li>Worked across gaming, tech, mobility</li>
                </ul>
              </div>

              <div className="highlight-box">
                <h4>Expertise</h4>
                <ul>
                  <li>Behavioral psychology and game design</li>
                  <li>Gamification and progression systems</li>
                  <li>UGC and creator programs</li>
                  <li>Community activation</li>
                  <li>AI-powered automation</li>
                </ul>
              </div>

              <div className="highlight-box">
                <h4>Background</h4>
                <ul>
                  <li>Based in Paris, work globally</li>
                  <li>English/French bilingual</li>
                  <li>Speaker at gaming and marketing events</li>
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

      <section className="final-cta">
        <div className="container">
          <h2>Ready to design your retention system?</h2>
          <p>
            Let&apos;s talk about your retention challenge and build a Fandom Flywheel that turns
            your customers into fans.
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
