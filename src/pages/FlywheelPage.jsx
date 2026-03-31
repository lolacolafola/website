import { lazy, Suspense } from 'react'

const FlywheelDiagram = lazy(() => import('../components/FlywheelDiagram'))
const SoftAurora = lazy(() => import('../components/SoftAurora'))
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

export default function FlywheelPage() {
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

          <div className="stages-list">
            <div className="stage-row"><span className="stage-num">01</span><span className="stage-name">Activation</span><div className="stage-detail"><span className="stage-line">The first moment of real value. The product earns their attention.</span><span className="stage-tactics">onboarding flows &middot; aha moment design &middot; first-session mechanics</span></div></div>
            <div className="stage-row"><span className="stage-num">02</span><span className="stage-name">Habit</span><div className="stage-detail"><span className="stage-line">They build the product into their routine. Usage becomes consistent and measurable.</span><span className="stage-tactics">streaks &middot; progression mechanics &middot; loyalty programs</span></div></div>
            <div className="stage-row"><span className="stage-num">03</span><span className="stage-name">Belonging</span><div className="stage-detail"><span className="stage-line">They feel seen. The brand creates a space they want to be part of.</span><span className="stage-tactics">community spaces &middot; events &middot; brand storytelling</span></div></div>
            <div className="stage-row"><span className="stage-num">04</span><span className="stage-name">Identity</span><div className="stage-detail"><span className="stage-line">The brand fits into who they are. It becomes part of how they show up in the world.</span><span className="stage-tactics">co-creation &middot; status tiers &middot; personalisation</span></div></div>
            <div className="stage-row"><span className="stage-num">05</span><span className="stage-name">Advocacy</span><div className="stage-detail"><span className="stage-line">They recruit, refer and create content. Passionate, authentic, and entirely self-driven.</span><span className="stage-tactics">referral programs &middot; creator programs &middot; ambassador programs</span></div></div>
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

      {/* ── PACKAGES ── */}
      <section className="services-section" id="packages">
        <div className="container">
          <div className="section-badge">Flywheel Packages</div>
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

    </main>
  )
}
