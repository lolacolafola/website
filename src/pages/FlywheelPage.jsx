import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'

const FlywheelDiagram = lazy(() => import('../components/FlywheelDiagram'))
const SoftAurora = lazy(() => import('../components/SoftAurora'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

const stages = [
  {
    name: "Activation",
    summary: "Get passive audiences to act.",
    example: "Delta Company launched on the E3 stage to 10M viewers. 10,000 applied from the US for 5 spots. The activation wasn\u2019t an ad \u2014 it was an invitation to belong.",
    source: "Ubisoft"
  },
  {
    name: "Habit",
    summary: "Turn first actions into repeat behaviour.",
    example: "Overlay quizzes gave viewers a reason to come back every stream. 90% engagement rate \u2014 because the mechanic made participation the default.",
    source: "Azarus"
  },
  {
    name: "Belonging",
    summary: "Make fans feel part of something bigger.",
    example: "Delta Company had 5 community clusters: artists, cosplayers, explorers, feedback specialists, tournament players. Members had roles, not just access.",
    source: "Ubisoft"
  },
  {
    name: "Identity",
    summary: "Fans define themselves through the brand.",
    example: "The $129 VIP bundle sold out in 3 hours. Not because of the SIM kit \u2014 because being a VIP member meant something.",
    source: "US Mobile"
  },
  {
    name: "Advocacy",
    summary: "Fans become the marketing channel.",
    example: "60M+ UGC views. $0 media spend. The community produced content, recruited members, and defended the brand in public.",
    source: "Ubisoft"
  }
]

export default function FlywheelPage() {
  const [openStage, setOpenStage] = useState(null)

  return (
    <main>

      {/* ── METHODOLOGY INTRO ── */}
      <section className="the-system">
        <div className="container">
          <div className="section-badge">The Methodology</div>
          <h2 className="section-title">Tune your fans into<br />your next growth engine.</h2>
          <p className="system-intro">
            The Fandom Flywheel&trade; is my five-stage system for turning passive audiences into active fans who drive repeat revenue, participation, and organic growth — from first login to lifelong advocate.
          </p>

          <div className="flywheel-diagram" aria-label="Fandom Flywheel Diagram">
            <Suspense fallback={<p className="diagram-placeholder">Loading flywheel...</p>}>
              <FlywheelDiagram />
            </Suspense>
          </div>

          <div className="flywheel-stages-accordion">
            {stages.map((stage, i) => (
              <div
                key={i}
                className={`flywheel-stage-card ${openStage === i ? 'expanded' : ''}`}
                onClick={() => setOpenStage(openStage === i ? null : i)}
              >
                <div className="flywheel-stage-header">
                  <span className="flywheel-stage-number">{i + 1}</span>
                  <div>
                    <h3 className="flywheel-stage-name">{stage.name}</h3>
                    <p className="flywheel-stage-summary">{stage.summary}</p>
                  </div>
                  <span className="flywheel-toggle">{openStage === i ? '\u2212' : '+'}</span>
                </div>
                {openStage === i && (
                  <div className="flywheel-stage-example">
                    <p>{stage.example}</p>
                    <cite>&mdash; {stage.source}</cite>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="creator-callout">
            <p>Before designing your Fandom Flywheel&trade;, I run a full audit across brand health, community KPIs, and campaign performance — mapping your current position at each stage to identify where fan value is leaking and where the biggest opportunity sits.</p>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="how-it-works">
        <div className="how-it-works-bg" aria-hidden="true">
          <Suspense fallback={null}>
            <SoftAurora
              speed={0.5}
              scale={1.5}
              brightness={1.3}
              color1="#E8A020"
              color2="#4BBFB0"
              noiseFrequency={2.0}
              noiseAmplitude={0.8}
              bandHeight={0.4}
              bandSpread={1.2}
              octaveDecay={0.15}
              layerOffset={0}
              colorSpeed={0.7}
              enableMouseInteraction
              mouseInfluence={0.15}
            />
          </Suspense>
        </div>
        <div className="container">
          <div className="section-badge">Why It Works</div>
          <h2 className="section-title">The research is settled.<br />Fan mechanics move the needle.</h2>
          <p className="section-intro">
            Across retention, conversion, referral, and revenue — the data points the same direction every time. Here&apos;s what the numbers say.
          </p>

          <div className="mechanics-simple-grid">
            <div className="mechanic-card">
              <div className="mechanic-stat">22x</div>
              <p className="mechanic-name">more memorable</p>
              <p className="mechanic-data">Brand storytelling drives 30% higher customer retention</p>
            </div>
            <div className="mechanic-card">
              <div className="mechanic-stat">48%</div>
              <p className="mechanic-name">higher engagement</p>
              <p className="mechanic-data">Progression mechanics improve retention by 22%</p>
            </div>
            <div className="mechanic-card">
              <div className="mechanic-stat">18%</div>
              <p className="mechanic-name">more revenue</p>
              <p className="mechanic-data">Loyalty members outspend non-members every year</p>
            </div>
            <div className="mechanic-card">
              <div className="mechanic-stat">161%</div>
              <p className="mechanic-name">more conversions</p>
              <p className="mechanic-data">UGC increases revenue per visitor by 154%</p>
            </div>
            <div className="mechanic-card">
              <div className="mechanic-stat">4x</div>
              <p className="mechanic-name">referral rate</p>
              <p className="mechanic-data">Word-of-mouth users stay 2x longer</p>
            </div>
            <div className="mechanic-card">
              <div className="mechanic-stat">80%</div>
              <p className="mechanic-name">more spend</p>
              <p className="mechanic-data">Top 15–20% of fans drive most organic growth</p>
            </div>
          </div>

          <div className="sources-note">
            <p>Stanford, Harvard Business Review, Goldman Sachs, Nielsen, Luminate, Bazaarvoice (2023-2025)</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="flywheel-pricing">
        <div className="container">
          <h2 className="section-title">Ready to build yours?</h2>
          <div className="flywheel-pricing-grid">
            <div className="flywheel-pricing-card">
              <h3>Fandom Flywheel Diagnostic</h3>
              <span className="flywheel-pricing-price">$15K</span>
              <p>Score your current fan ecosystem across all 5 stages. Get a prioritised action plan.</p>
            </div>
            <div className="flywheel-pricing-card">
              <h3>Fandom Flywheel Blueprint</h3>
              <span className="flywheel-pricing-price">from $45K</span>
              <p>Full system design: strategy, mechanics, content frameworks, and a 90-day launch roadmap.</p>
            </div>
          </div>
          <div className="flywheel-pricing-cta">
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              Book a Discovery Call &rarr;
            </a>
          </div>
          <div className="larger-engagements">
            <p>Want to see all services? <Link to="/services">View full services &rarr;</Link></p>
          </div>
        </div>
      </section>

    </main>
  )
}
