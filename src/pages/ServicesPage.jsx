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

      {/* ── STRATEGY ── */}
      <section className="consulting-track">
        <div className="container">
          <div className="track-header">
            <span className="track-number">01</span>
            <h2 className="track-title">Strategy &amp; Advisory</h2>
            <p className="track-description">
              Clarify your fan growth direction, align your team across brand, product, and community, and build the roadmap. I bridge the silos that most companies struggle with.
            </p>
          </div>
          <div className="offerings-grid">
            <div className="offering-card">
              <h3>Fan Growth Strategy</h3>
              <p>Audit your current fan ecosystem — brand, product, CRM, and community. Define where value is leaking and build a phased plan to capture it.</p>
              <span className="offering-proof">Built at: Ubisoft (Delta Company &rarr; 500+ creators, 50M+ views, $0 ad spend)</span>
            </div>
            <div className="offering-card">
              <h3>Fan Engagement Workshops</h3>
              <p>Half-day or full-day sessions with your team to identify fan opportunities, map your retention gaps, and prioritise high-impact initiatives.</p>
              <span className="offering-proof">Ran at: Ubisoft EMEA (18 subsidiaries onboarded, 100+ hrs/month ops work eliminated)</span>
            </div>
            <div className="offering-card">
              <h3>Fractional Leadership</h3>
              <p>Embedded strategic support as a fractional Head of Fan Growth — bridging brand, product, and community without the full-time overhead.</p>
              <span className="offering-proof">Currently: Magic (founding team, fan growth &amp; engagement for entertainment). Previously: US Mobile (interim, reporting to CEO)</span>
            </div>
            <div className="offering-card">
              <h3>Brand &amp; Retention Audits</h3>
              <p>Deep-dive into your brand positioning, lifecycle engagement, and growth loops. You get a clear picture of what&apos;s driving repeat behaviour — and what isn&apos;t.</p>
              <span className="offering-proof">Built at: BlaBlaCar (SWOT review &rarr; &minus;90% ad-hoc requests, freeing design team for strategic work)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXECUTION ── */}
      <section className="consulting-track">
        <div className="container">
          <div className="track-header">
            <span className="track-number">02</span>
            <h2 className="track-title">Hands-On Execution</h2>
            <p className="track-description">
              I don&apos;t just advise — I build. Participation systems, creator ecosystems, and retention mechanics that turn fan energy into measurable business results.
            </p>
          </div>
          <div className="offerings-grid">
            <div className="offering-card">
              <h3>Creator-Led Growth</h3>
              <p>Structure creators not as one-off promo, but as a repeatable media and participation channel. Recruitment, onboarding, content frameworks, and performance tracking.</p>
              <span className="offering-proof">Built at: Ubisoft (Delta Company — 10K applications for 5 spots, E3 stage launch to 10M viewers)</span>
            </div>
            <div className="offering-card">
              <h3>Participation Systems</h3>
              <p>Build the structures that make people return, contribute, and share. Community spaces, events, and engagement loops that compound over time.</p>
              <span className="offering-proof">Built at: Azarus (product pivot, 20% of 500K viewers converted to members)</span>
            </div>
            <div className="offering-card">
              <h3>Fan-First Campaigns</h3>
              <p>Campaign concepts built on fan identity and cultural instinct — not just performance thinking. From superfan product drops to community-generated content.</p>
              <span className="offering-proof">Built at: US Mobile (Claw Mobile — parody ad campaign, 38% CAC reduction, 88% retention)</span>
            </div>
            <div className="offering-card">
              <h3>Repeat Behaviour Design</h3>
              <p>Gamified retention systems — streaks, progression, loyalty tiers — designed around fan psychology. Why people stay, participate, and talk.</p>
              <span className="offering-proof">Built at: US Mobile (gamified landing pages, 50K+ visitors. VIP bundle sold out in 3 hours)</span>
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
