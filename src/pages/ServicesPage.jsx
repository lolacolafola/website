import { Link } from 'react-router-dom'

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
              <span className="cs-agg-value">$0</span>
              <span className="cs-agg-label">Ad Spend</span>
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

      {/* ── OFFERINGS ── */}
      <section className="consulting-track">
        <div className="container">
          <div className="offerings-grid offerings-grid-2col">
            <div className="offering-card offering-card-priced">
              <span className="offering-price">$15K</span>
              <h3>Fandom Flywheel Diagnostic</h3>
              <p>A deep-dive audit of your current fan ecosystem: who your fans are, where they drop off, and what&apos;s blocking organic growth. You get a scored assessment across the 5 Flywheel stages plus a prioritised action plan.</p>
              <span className="offering-proof">Built the audit methodology behind Delta Company (Ubisoft), BlaBlaCar&apos;s brand overhaul, and US Mobile&apos;s community strategy</span>
            </div>
            <div className="offering-card offering-card-priced offering-card-featured">
              <span className="offering-price">$45K&ndash;$65K</span>
              <h3>Fandom Flywheel Blueprint</h3>
              <p>The full system design. I map your fan journey across all 5 Flywheel stages and deliver the strategy, mechanics, content frameworks, and operational playbooks to build your fan-powered growth engine.</p>
              <p className="offering-tiers"><strong>Blueprint Core ($45K):</strong> Strategy + system design + 90-day roadmap.<br /><strong>Blueprint + Launch ($60&ndash;65K):</strong> Everything in Core + hands-on support through first activation.</p>
              <span className="offering-proof">Designed the systems behind Delta Company (50M+ views, $0 spend), BlaBlaCar&apos;s 22-market content engine (&euro;5 CAC), and US Mobile&apos;s community revenue model ($32K in 3 hours)</span>
            </div>
            <div className="offering-card offering-card-priced">
              <span className="offering-price">$8&ndash;12K/month</span>
              <h3>Fractional Leadership</h3>
              <p>I embed in your team as a fractional Head of Fan Growth &amp; Engagement. I run the strategy, manage the team, and ship the work. Best for companies who need senior leadership but aren&apos;t ready for a full-time hire.</p>
              <span className="offering-proof">Currently: Magic (founding team, fan growth &amp; engagement for entertainment). Previously: US Mobile (6 months in-house, reporting to CEO)</span>
            </div>
            <div className="offering-card offering-card-priced">
              <span className="offering-price">Custom</span>
              <h3>Campaigns &amp; Activation</h3>
              <p>Standalone campaign design and execution: creator programs, fan events, gamified experiences, brand content production. For teams that have a strategy but need a senior creative operator to make it happen.</p>
              <span className="offering-proof">Claw Mobile ad campaign (US Mobile, 38% CAC reduction), BlaBlaCar &times; Live Nation festival partnerships, Azarus &times; 2022 Streamer Awards title sponsorship</span>
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
          <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
            Book a Free 30-Min Call
          </a>
        </div>
      </section>

    </main>
  )
}
