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
          <h1 className="section-title">Ways to work together</h1>
          <p className="section-intro">
            I help consumer brands build stronger retention, deeper participation, and more organic word of mouth — across brand, product, community, and real-world experience.
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
            <li>You have a loyal customer base but acquisition is still dominated by paid spend</li>
            <li>You have fans — people who genuinely love what you&apos;ve built — but no system to activate them</li>
            <li>Retention is flat despite strong product quality</li>
            <li>Your community exists, but it&apos;s not connected to your growth metrics</li>
            <li>You know your brand experience should feel more joined-up across digital, content, and real life</li>
          </ul>
          <p className="qualifying-close">If two or more of these sound familiar, this is where we start.</p>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="consulting-track">
        <div className="container">

          <div className="flywheel-offering-card">
            <div className="flywheel-offering-header">
              <span className="flywheel-offering-badge">Fandom Flywheel&trade;</span>
              <h2 className="flywheel-offering-title">From quick diagnosis to full system build.</h2>
              <p className="flywheel-offering-intro">Every engagement is built around strategy first. Implementation, messaging, and execution support can be added as needed.</p>
            </div>
            <div className="flywheel-tiers flywheel-tiers--four">

              <div className="flywheel-tier">
                <span className="flywheel-tier-number">01</span>
                <div className="flywheel-tier-price">from &euro;4K <span className="flywheel-tier-price-alt">/ $4.5K</span></div>
                <h3 className="flywheel-tier-name">Diagnostic</h3>
                <p className="flywheel-tier-outcome"><strong>2 weeks.</strong> A strategic review of your current growth system across brand, product, retention, and participation.</p>
                <ul className="flywheel-tier-deliverables">
                  <li>Current-state audit across brand, product &amp; participation</li>
                  <li>Key gaps, quick wins, and missed opportunities</li>
                  <li>Prioritised recommendations</li>
                  <li>90-day action roadmap</li>
                  <li>Final readout session</li>
                </ul>
                <span className="flywheel-pricing-tagline">Find out where you stand.</span>
              </div>

              <div className="flywheel-tier">
                <span className="flywheel-tier-number">02</span>
                <div className="flywheel-tier-price">from &euro;6K <span className="flywheel-tier-price-alt">/ $6.5K</span></div>
                <h3 className="flywheel-tier-name">Focused Sprint</h3>
                <p className="flywheel-tier-outcome"><strong>2&ndash;3 weeks.</strong> A fast-moving engagement built around one high-leverage growth lever.</p>
                <ul className="flywheel-tier-deliverables">
                  <li>Sprint strategy &amp; core concepts</li>
                  <li>Participation or recommendation mechanics</li>
                  <li>KPI recommendations</li>
                  <li>Launch or rollout plan</li>
                  <li>Implementation guidance</li>
                </ul>
                <span className="flywheel-pricing-tagline">Fix one lever fast.</span>
              </div>

              <div className="flywheel-tier flywheel-tier--featured">
                <span className="flywheel-tier-number">03</span>
                <div className="flywheel-tier-price">from &euro;15K <span className="flywheel-tier-price-alt">/ $16.5K</span></div>
                <h3 className="flywheel-tier-name">Flywheel Strategy</h3>
                <p className="flywheel-tier-outcome"><strong>4&ndash;6 weeks.</strong> A full Fandom Flywheel&trade; engagement designed around your business model, product roadmap, and growth goals.</p>
                <ul className="flywheel-tier-deliverables">
                  <li>Full five-stage strategy</li>
                  <li>Brand, product &amp; participation recommendations</li>
                  <li>Retention, advocacy &amp; recommendation loops</li>
                  <li>KPI framework &amp; measurement plan</li>
                  <li>Prioritised 90-day / 6-month roadmap</li>
                </ul>
                <span className="flywheel-pricing-tagline">Design the system.</span>
              </div>

              <div className="flywheel-tier">
                <span className="flywheel-tier-number">04</span>
                <div className="flywheel-tier-price">tailored</div>
                <h3 className="flywheel-tier-name">Embedded Support</h3>
                <p className="flywheel-tier-outcome"><strong>Monthly.</strong> Senior strategic support to help your team build, activate, and refine the system in practice.</p>
                <ul className="flywheel-tier-deliverables">
                  <li>Monthly working sessions</li>
                  <li>Strategic review &amp; iteration</li>
                  <li>Priority guidance across brand, product &amp; CRM</li>
                  <li>Ongoing advisory &amp; feedback</li>
                </ul>
                <span className="flywheel-pricing-tagline">Build it with me.</span>
              </div>

            </div>
          </div>

          {/* Sprint examples */}
          <div className="flywheel-bridge" style={{ marginTop: '3rem' }}>
            <h3 className="flywheel-bridge-title">Focused Sprint examples</h3>
            <p className="flywheel-bridge-body">Recommendation system design &middot; UGC programmes &middot; Retention strategy &middot; Launch &amp; participation campaigns &middot; IRL brand activations &middot; Fan strategy workshops &middot; Community audits &middot; CRM &amp; lifecycle sprints</p>
          </div>

          {/* Add-ons */}
          <div className="flywheel-bridge">
            <h3 className="flywheel-bridge-title">Need more than the strategy?</h3>
            <p className="flywheel-bridge-body">I also offer add-on support across messaging, campaign concepts, CRM journeys, creator and community mechanics, IRL activations, event design, and team workshops.</p>
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
              <h3>US &amp; European markets</h3>
              <p>Deep American market experience since 2018 — Ubisoft, Amazon Games, US startups. Based in Paris, working US-timezone hours.</p>
            </div>
            <div className="work-style-item">
              <span className="work-style-icon">&#127919;</span>
              <h3>Strategy to execution</h3>
              <p>I don&apos;t just advise — I build. From roadmap to running program.</p>
            </div>
            <div className="work-style-item">
              <span className="work-style-icon">&#127468;&#127463;</span>
              <h3>Bilingual</h3>
              <p>English and French. Comfortable leading across US, UK, and European teams and stakeholders.</p>
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
            <span className="path-badge">The Methodology</span>
            <h2>See the full growth system.</h2>
            <p>
              The Fandom Flywheel&trade; is a five-stage growth system that aligns brand, product, and participation to turn attention into retention, advocacy, and organic growth.
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
