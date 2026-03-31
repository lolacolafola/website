import { useState } from 'react'

const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

const caseStudies = [
  {
    company: 'Ubisoft',
    headline: '$500K+ in earned media value',
    hook: 'Zero ad spend. 50M+ organic views.',
    tags: ['Creator Programs', 'Community', 'Global Scale'],
    stats: [
      { value: '50M+', label: 'Organic UGC views' },
      { value: '$0', label: 'Ad spend' },
      { value: '500+', label: 'Community leaders' },
      { value: '18', label: 'Markets' },
    ],
    challenge:
      'Massive playerbases, no system to activate them as a growth channel.',
    approach:
      'Designed Delta Company with 5 community clusters (artists, cosplayers, explorers, feedback specialists, tournament players). Launched at E3 2019 to 10M+ viewers. 10K US applications for 5\u201310 spots. Pivoted to feedback engine when Breakpoint launched badly (50% negative \u2192 80% positive sentiment). Scaled to 3 franchises. Then proved it was repeatable: built the R6 Siege Community Creator Program (150+ invite-only creators, 6M video views, 2.4M live watch hours, 393K interactions \u2014 Season 1 alone, $0 media spend).',
    takeaway:
      'Built the system that turned Ubisoft\u2019s players into their most valuable marketing channel. Then proved it was repeatable across multiple franchises.',
  },
  {
    company: 'US Mobile',
    headline: '$32K revenue in 3 hours',
    hook: 'From a free SIM kit to a $129 fan bundle.',
    tags: ['Revenue', 'Gamification', 'PLG'],
    stats: [
      { value: '$32K', label: 'Revenue in 3 hrs' },
      { value: '38%', label: 'CAC reduction' },
      { value: '88%', label: 'Retention' },
      { value: '80%', label: 'Email open rate' },
    ],
    challenge:
      '$54M ARR company, 200K subs, 100% YoY growth \u2014 but never monetised community directly.',
    approach:
      'Designed $129 VIP bundle. Built gamified landing pages (50K+ visitors). Led production of \u201cClaw Mobile\u201d ad campaign with Luna agency \u2014 a Mint Mobile parody featuring a fake Hugh Jackman, spoof blog, and CEO reveal landing pages. Organised exclusive Madison Avenue launch event (200+ attendees incl. AT&T execs).',
    takeaway:
      'Proved a community-first company can monetise its fans directly.',
  },
  {
    company: 'BlaBlaCar',
    headline: '0 \u2192 1M members',
    hook: '\u20AC5 CAC. 22 markets. One creative system.',
    tags: ['Cold Start', 'Community', 'Brand', 'Ops'],
    stats: [
      { value: '1M', label: 'UK members from 0' },
      { value: '\u20AC5', label: 'CAC (quarterly avg.)' },
      { value: '\u221290%', label: 'Ad-hoc design requests' },
      { value: '22', label: 'Markets served' },
    ],
    challenge:
      'UK launch \u2014 no brand recognition, culture sceptical of carpooling.',
    approach:
      'Built UK community from scratch (social, CRM, meetups). Secured Live Nation festival partnerships. Promoted to Brand & Design team \u2014 ran SWOT review, reduced design requests 90%. Promoted again \u2014 pioneered first-person smartphone narrative storytelling, built template system for 22 markets.',
    quote: {
      text: 'Laura is a start-up swiss knife\u2026 with some extra fun.',
      name: 'Nicolas Brusson',
      title: 'CEO of BlaBlaCar',
    },
    takeaway:
      'Three promotions in four years. Launched a market, fixed the ops, built the creative engine.',
  },
  {
    company: 'Azarus',
    headline: '20% of 500K viewers became members',
    hook: 'Product pivot. Team of 8. Servers crashed.',
    tags: ['Product Pivot', 'VP Leadership', 'Influencer'],
    stats: [
      { value: '+80%', label: 'MAU in 4 months' },
      { value: '500K', label: 'Peak viewers' },
      { value: '20%', label: 'Viewer \u2192 member' },
      { value: '30+', label: 'Streamers' },
    ],
    challenge:
      'Twitch overlay with 20M players but no monetisation path, needed full product pivot.',
    approach:
      'Built streamer network. Led product pivot to Chrome extension / Game Ads platform. Delivered 6 game ads in 3 months (Ubisoft, Logitech). Secured title sponsorship of 2022 Streamer Awards.',
    takeaway:
      'Navigated a product pivot, proved market fit at the biggest event of the year.',
  },
  {
    company: 'BlaBlaCar',
    headline: 'Live Nation Official Ridesharing Partner',
    hook: 'Branded parking zones at the UK\u2019s biggest festivals.',
    tags: ['Partnerships', 'Brand Activation', 'Grassroots'],
    stats: [
      { value: '3', label: 'Major festivals' },
      { value: '200+', label: 'Meetup attendees' },
      { value: '1M', label: 'UK members (contributed)' },
      { value: '\u20AC5', label: 'CAC across 22 markets' },
    ],
    challenge:
      'UK market had zero brand recognition for BlaBlaCar. Needed high-visibility, trust-building activations to reach a sceptical audience.',
    approach:
      'Secured Live Nation as Official Ridesharing Partner \u2014 unprecedented for a carpooling platform. Managed branded festival parking zones and community tents at Latitude, Leeds, and Reading. Ran on-site activations and community meetups. Combined festivals with grassroots CRM (35% open rate, 12% CTR \u2014 best in company) and social community building.',
    takeaway:
      'Turned festivals into a trust-building channel that made carpooling feel culturally normal in the UK. The kind of work that doesn\u2019t show up in dashboards but changes how people feel about your brand.',
  },
]

const aggregateStats = [
  { value: '50M+', label: 'views' },
  { value: '\u221238%', label: 'CAC' },
  { value: '$0', label: 'Ad Spend' },
  { value: '500+', label: 'Leaders' },
]

export default function CaseStudiesPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <main>
      <section className="cs-hero">
        <div className="container">
          <div className="section-badge">Case Studies</div>
          <h1 className="section-title">The work</h1>
          <p className="section-intro">
            Real results from fan-powered growth systems built at Ubisoft, US&nbsp;Mobile, BlaBlaCar, and Azarus.
          </p>
          <div className="cs-aggregate">
            {aggregateStats.map((s, i) => (
              <div key={i} className="cs-agg-item">
                <span className="cs-agg-value">{s.value}</span>
                <span className="cs-agg-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-list">
        <div className="container">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className={`cs-card ${openIndex === i ? 'cs-card-open' : ''}`}
            >
              <button className="cs-card-header" onClick={() => toggle(i)}>
                <div className="cs-card-left">
                  <span className="cs-company">{cs.company}</span>
                  <h2 className="cs-headline">{cs.headline}</h2>
                  <p className="cs-hook">{cs.hook}</p>
                </div>
                <div className="cs-card-tags">
                  {cs.tags.map((tag, j) => (
                    <span key={j} className="cs-tag">{tag}</span>
                  ))}
                </div>
                <span className="cs-toggle">{openIndex === i ? '\u2212' : '+'}</span>
              </button>

              {openIndex === i && (
                <div className="cs-card-body">
                  <div className="cs-stats-row">
                    {cs.stats.map((s, j) => (
                      <div key={j} className="cs-stat">
                        <span className="cs-stat-value">{s.value}</span>
                        <span className="cs-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cs-detail">
                    <div className="cs-detail-block">
                      <h4>Challenge</h4>
                      <p>{cs.challenge}</p>
                    </div>
                    <div className="cs-detail-block">
                      <h4>Approach</h4>
                      <p>{cs.approach}</p>
                    </div>
                    <div className="cs-detail-block cs-takeaway">
                      <h4>Takeaway</h4>
                      <p>{cs.takeaway}</p>
                    </div>
                  </div>
                  {cs.quote && (
                    <blockquote className="cs-quote">
                      <p>&ldquo;{cs.quote.text}&rdquo;</p>
                      <cite>&mdash; {cs.quote.name}, {cs.quote.title}</cite>
                    </blockquote>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Want results like these?</h2>
          <p>
            Let&apos;s talk about where your fan value is going uncaptured &mdash; and what it would look like to build the system that changes that.
          </p>
          <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
            Book a Free 30-Min Call
          </a>
        </div>
      </section>
    </main>
  )
}
