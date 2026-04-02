import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'

const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

export default function ServicesPage() {
  return (
    <main>

      {/* ── HEADER ── */}
      <section className="services-hero">
        <div className="container">
          <div className="section-badge">Services</div>
          <h1 className="section-title">How I can help</h1>
          <p className="section-intro">
            I help brands turn passive audiences into active fans who stay longer, spend more, and bring others with them. From strategy to hands-on execution.
          </p>
        </div>
      </section>

      {/* ── SERVICES STATS ── */}
      <section className="services-stats">
        <div className="container">
          <div className="cs-aggregate">
            <div className="cs-agg-item">
              <span className="cs-agg-value">50M+</span>
              <span className="cs-agg-label">Organic Views</span>
            </div>
            <div className="cs-agg-item">
              <span className="cs-agg-value">&euro;5</span>
              <span className="cs-agg-label">CAC</span>
            </div>
            <div className="cs-agg-item">
              <span className="cs-agg-value">$32K</span>
              <span className="cs-agg-label">in 3 Hrs</span>
            </div>
            <div className="cs-agg-item">
              <span className="cs-agg-value">22</span>
              <span className="cs-agg-label">Markets</span>
            </div>
            <div className="cs-agg-item">
              <span className="cs-agg-value">500+</span>
              <span className="cs-agg-label">Leaders</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFYING SECTION ── */}
      <section className="qualifying-section">
        <div className="container">
          <h2 className="qualifying-title">You might be here if&hellip;</h2>
          <ul className="qualifying-list">
            <li>You have a loyal user base but acquisition is still dominated by paid spend</li>
            <li>You have fans — people who genuinely love what you&apos;ve built — but no system to activate them</li>
            <li>Retention is flat despite strong product quality</li>
            <li>Your community exists, but it&apos;s not connected to your growth metrics</li>
          </ul>
          <p className="qualifying-close">If two or more of these sound familiar, this is where we start.</p>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="consulting-track">
        <div className="container">

          {/* Fandom Flywheel — umbrella card with 3 tiers */}
          <div className="flywheel-offering-card">
            <div className="flywheel-offering-header">
              <span className="flywheel-offering-badge">Fandom Flywheel&trade;</span>
              <h2 className="flywheel-offering-title">My core methodology, in three stages.</h2>
              <p className="flywheel-offering-intro">Each tier builds on the last — start with clarity, then design the system, then launch it.</p>
            </div>
            <div className="flywheel-tiers">

              <div className="flywheel-tier">
                <span className="flywheel-tier-number">01</span>
                <div className="flywheel-tier-price">$15K</div>
                <h3 className="flywheel-tier-name">Diagnostic</h3>
                <p className="flywheel-tier-outcome"><strong>You will get:</strong> Clarity on where your fan value is leaking and a prioritised roadmap to capture it.</p>
                <p className="flywheel-tier-desc">A 2-week audit across brand, product, and community. Scored assessment across all 5 Flywheel stages plus a prioritised action plan with commercial impact sizing.</p>
                <ul className="flywheel-tier-deliverables">
                  <li>Fandom Flywheel audit across all five stages</li>
                  <li>Gap analysis with commercial impact sizing</li>
                  <li>Priority roadmap ranked by ROI</li>
                  <li>90-min leadership presentation</li>
                </ul>
              </div>

              <div className="flywheel-tier flywheel-tier--featured">
                <span className="flywheel-tier-number">02</span>
                <div className="flywheel-tier-price">$45K</div>
                <h3 className="flywheel-tier-name">Diagnostic + Blueprint</h3>
                <p className="flywheel-tier-outcome"><strong>You will get:</strong> The full audit plus a complete fan system designed and ready to execute.</p>
                <p className="flywheel-tier-desc">Everything in the Diagnostic, then 6–8 weeks to design your complete Fandom Flywheel from Activation through to Advocacy.</p>
                <ul className="flywheel-tier-deliverables">
                  <li>Everything in Diagnostic</li>
                  <li>Complete five-stage Flywheel design</li>
                  <li>Creator and community program frameworks</li>
                  <li>90-day implementation roadmap</li>
                  <li>Success metrics and measurement framework</li>
                </ul>
              </div>

              <div className="flywheel-tier">
                <span className="flywheel-tier-number">03</span>
                <div className="flywheel-tier-price">$60&ndash;65K</div>
                <h3 className="flywheel-tier-name">Diagnostic + Blueprint + Launch</h3>
                <p className="flywheel-tier-outcome"><strong>You will get:</strong> The full system designed and launched — from audit to live activation.</p>
                <p className="flywheel-tier-desc">Everything in Diagnostic + Blueprint, plus I stay in to oversee the first launch — creator program, campaign, or community pilot — from design to live.</p>
                <ul className="flywheel-tier-deliverables">
                  <li>Everything in Diagnostic + Blueprint</li>
                  <li>Hands-on first activation support</li>
                  <li>AI-enabled content and automation workflows</li>
                  <li>Cross-functional workshop sessions</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Other engagements */}
          <div className="other-offerings-grid">
            <div className="offering-card offering-card-priced">
              <span className="offering-price">$8&ndash;12K/month</span>
              <h3>Fractional Leadership</h3>
              <p>I embed in your team as a fractional Head of Fan Growth &amp; Engagement. I run the strategy, manage the team, and ship the work. Best for companies who need senior leadership but aren&apos;t ready for a full-time hire.</p>
            </div>
            <div className="offering-card offering-card-priced">
              <span className="offering-price">Custom</span>
              <h3>Campaigns &amp; Activation</h3>
              <p>Standalone campaign design and execution: creator programs, fan events, gamified experiences, brand content production. For teams that have a strategy but need a senior creative operator to make it happen.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="how-i-work">
        <div className="container">
          <h2 className="section-title">How I work</h2>
          <div className="work-style-grid">
            <div className="work-style-item">
              <span className="work-style-icon">&#127758;</span>
              <h3>Remote-first</h3>
              <p>Based in Paris, working with clients globally. US timezone friendly.</p>
            </div>
            <div className="work-style-item">
              <span className="work-style-icon">&#127919;</span>
              <h3>Strategy to execution</h3>
              <p>I don&apos;t just advise — I build. From roadmap to running program.</p>
            </div>
            <div className="work-style-item">
              <span className="work-style-icon">&#127468;&#127463;</span>
              <h3>Bilingual</h3>
              <p>English and French. Comfortable across European and US markets.</p>
            </div>
            <div className="work-style-item">
              <span className="work-style-icon">&#9889;</span>
              <h3>Flexible engagement</h3>
              <p>Project-based, retainer, or fractional. We&apos;ll find the right fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLYWHEEL TEASE ── */}
      <section className="flywheel-tease">
        <div className="container">
          <div className="flywheel-tease-card">
            <span className="path-badge">Premium Methodology</span>
            <h2>Looking for a complete fan system?</h2>
            <p>
              The Fandom Flywheel&trade; is my proprietary five-stage methodology for turning users into lifelong fans. It includes structured audit packages and full system design.
            </p>
            <Link to="/flywheel" className="cta-button">Explore the Fandom Flywheel &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="final-cta">
        <div className="container">
          <h2>Let&apos;s figure out what you need.</h2>
          <p>
            Every engagement starts with a conversation. Tell me what&apos;s going on and we&apos;ll find the right way to work together.
          </p>
          <p className="calculator-cta">
            Not sure where to start? <Link to="/calculator" className="calculator-link">Run the numbers first &rarr;</Link>
          </p>
          <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
            Book a Free 30-Min Call
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
