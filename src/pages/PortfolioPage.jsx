import SiteFooter from '../components/SiteFooter'
const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

const portfolioItems = [
  {
    title: 'Magic \u2014 Interactive Artist Pitch Deck',
    description: '14-slide bilingual (EN/FR) deck with revenue simulator. Designed in Figma, built with Claude Code.',
    tags: ['Figma \u2192 Code', 'Vibe Coded', 'GTM'],
    image: null,
    link: 'https://lolacolafola.github.io/magic-artist-deck/',
  },
  {
    title: 'Claw Mobile \u2014 US Mobile Ad Campaign',
    description: 'Full creative production \u2014 concept, casting, scripting, post-production. A Mint Mobile parody with fake Hugh Jackman, spoof blog, and CEO reveal.',
    tags: ['Creative Direction', 'Campaign'],
    image: null,
    link: null,
  },
  {
    title: 'lauracordrey.com \u2014 Portfolio Site',
    description: 'Dark-theme portfolio with WebGL shaders. React 19 + Vite + Claude Code.',
    tags: ['Vibe Coded', 'Design'],
    image: null,
    link: 'https://lolacolafola.github.io/website/',
  },
  {
    title: 'Public Speaking \u2014 20+ Engagements',
    description: 'E3 2019 stage (10M+ viewers), conferences, panels, live events. Official Ubisoft spokesperson.',
    tags: ['Speaking', 'Spokesperson'],
    image: null,
    link: null,
  },
  {
    title: 'BlaBlaCar \u00d7 Live Nation Festival Partnerships',
    description: 'Official Ridesharing Partner for Latitude, Leeds, Reading. Managed branded festival zones and community activations.',
    tags: ['Partnerships', 'Brand Activation'],
    image: null,
    link: null,
  },
]

export default function PortfolioPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="section-badge">Portfolio</div>
          <h1 className="section-title">The work behind the work.</h1>
          <p className="section-intro">
            Campaigns, tools, and things I&apos;ve built.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => {
              const inner = (
                <>
                  <div className="portfolio-card-image">
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <span className="portfolio-card-placeholder">{item.title.split('\u2014')[0].trim()}</span>
                    )}
                  </div>
                  <div className="portfolio-card-body">
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <p className="portfolio-card-desc">{item.description}</p>
                    <div className="portfolio-tags">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="portfolio-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </>
              )
              return item.link ? (
                <a key={i} href={item.link} className="portfolio-card" target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={i} className="portfolio-card">{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="final-cta">
        <div className="container">
          <h2>Want to see what I can build for you?</h2>
          <p>Let&apos;s talk about your next fan-powered project.</p>
          <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
            Book a Free 30-Min Call
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
