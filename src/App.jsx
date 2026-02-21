import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import './App.css'

// Components
const Prism = lazy(() => import('./components/Prism'))
const FlywheelDiagram = lazy(() => import('./components/FlywheelDiagram'))
const LogoLoop = lazy(() => import('./components/LogoLoop'))

// Icons
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const Mail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const Linkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const Calendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

// Focus area icons
const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
)

const SparklesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L14.5 8.5L20 9L16 13.5L17 19L12 16L7 19L8 13.5L4 9L9.5 8.5L12 3Z"/>
  </svg>
)

const RouteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="3"/>
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
    <circle cx="18" cy="5" r="3"/>
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)


// Navigation sections
const navSections = [
  { id: 'belief', label: 'Belief' },
  { id: 'business-case', label: 'Opportunity' },
  { id: 'system', label: 'Fandom Flywheel' },
  { id: 'work', label: 'Work Together' }
]

const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

function Navbar({ activeSection, onOpenCalendly }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src="/logo-website.png" alt="Laura Cordrey" width="38" height="38" className="navbar-logo-image" />
        Laura Cordrey
      </div>
      <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
        {navSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`navbar-link ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {section.label}
          </a>
        ))}
        <button
          type="button"
          className="navbar-cta"
          onClick={() => {
            setMobileOpen(false)
            onOpenCalendly()
          }}
        >
          Get in Touch
        </button>
      </div>
      <button
        className="navbar-mobile-toggle"
        aria-label="Menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

const trackRecordLogos = [
  { src: '/ubisoft-Logo.png', alt: 'Ubisoft', width: 320, height: 181 },
  { src: '/amaz-game.png', alt: 'Amazon Games', width: 320, height: 141 },
  { src: '/blablacar-logo.png', alt: 'BlaBlaCar', width: 320, height: 213 },
  { src: '/Azarus.png', alt: 'Azarus', width: 600, height: 600 },
  { src: '/Dazzly.png', alt: 'Dazzly', width: 916, height: 384 },
  { src: '/IKEA-Logo-1967.png', alt: 'IKEA', width: 3840, height: 2160 },
  { src: '/allsaints.png', alt: 'AllSaints', width: 225, height: 225 },
  { src: '/apprt.png', alt: 'Apprt', width: 250, height: 52 },
  { src: '/basso-brooke-vector-375.png', alt: 'Basso Brooke', width: 373, height: 202 },
  { src: '/fabric-pour-logo.png', alt: 'Fabric', width: 486, height: 291 },
  { src: '/selfridges.png', alt: 'Selfridges', width: 287, height: 176 },
  { src: '/us mobile.png', alt: 'US Mobile', width: 1280, height: 800 }
]

function Hero({ enablePrism }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-prism">
          {!enablePrism ? (
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
      <div className="hero-content">
        <h1>
          I design <span className="highlight">fandom</span> as a growth system
        </h1>
        <p className="hero-subtitle">
            I help brands turn participation into habit, and habit into compounding business value.
        </p>
        <p className="hero-audience">
            For product-led consumer brands, in gaming, beauty, wellness, and entertainment.
        </p>
        <div className="hero-cta-group">
          <a href="#contact" className="hero-cta hero-cta-primary">
            Let's Talk <ArrowRight />
          </a>
          <a href="#belief" className="hero-cta hero-cta-secondary">
            Learn More
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        Scroll to explore
        <ChevronDown />
      </div>
    </section>
  )
}

function BeliefSection({ setActiveSection }) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('belief')
    }
  })

  return (
    <section id="belief" ref={ref} className="section section-subtle">
      <div className="section-container">
        <div className="belief-content belief-content-single">
          <h2 className="belief-heading">The belief</h2>

          <p>
            Most brands optimize for reach. They measure success in impressions, followers, and acquisition costs. But sustainable growth doesn't come from buying attention &mdash; it comes from earning repetition.
          </p>

          <p>
            Fandom isn't a marketing channel or a campaign you run twice a year. It's infrastructure. It's the system that turns casual users into repeat participants, passive audiences into active communities, and transactions into relationships you own.
          </p>

          <div className="belief-highlight">
            <p>
              "I've spent 12 years building the pieces &mdash; now I'm connecting them into a repeatable system that drives retention, lifetime value, and organic growth."
            </p>
          </div>

          <p>
            When people participate repeatedly, they stay longer, spend more, and bring others with them. That's not aspiration. That's mechanics.
          </p>
        </div>
      </div>
    </section>
  )
}

function OpportunitySection({ setActiveSection }) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('business-case')
    }
  })

  return (
    <section id="business-case" ref={ref} className="section section-dark opportunity-section">
      <div className="section-container opportunity-container">
        <h2 className="opportunity-heading">The opportunity</h2>
        <p>
          Influencer campaigns spike your MAU, then it crashes back to baseline. CAC has doubled in three years, but retention hasn't improved. You're pouring millions into acquisition while your product bleeds users.
        </p>
        <p>
          The pattern repeats: spike, drop, repeat. Because acquisition without retention is a leaky bucket. Every dollar you spend on ads or influencers pours straight through unless you have systems that make users stay, participate, and bring others.
        </p>
        <p>
          The math is clear: a 10-point reduction in churn creates more value than a 10% increase in acquisition. Referred customers stay twice as long and spend more. Retention improvements compound. This isn't theory &mdash; it's measurable, repeatable business impact.
        </p>

        <div className="opportunity-stats">
          <div className="opportunity-stat-item">
            <div className="opportunity-stat-number">$10M&ndash;$30M</div>
            <div className="opportunity-stat-label">Potential value created over 2-3 years for a mid-sized brand</div>
          </div>

          <div className="opportunity-stat-item">
            <div className="opportunity-stat-number">100&ndash;300x</div>
            <div className="opportunity-stat-label">ROI when retention systems replace acquisition spend</div>
          </div>
        </div>

        <div className="opportunity-example">
          <div className="opportunity-example-label">Example Scenario</div>
          <div className="opportunity-example-content">
            A brand with 1M active users and $50M ARR reduces churn by 10 percentage points. Year 1 impact: $5M in retained revenue + $3M in saved acquisition costs. Over 3 years with compounding: $25M+ in value created. Your investment to build that system: $75k&ndash;$120k.
          </div>
        </div>

        <p className="opportunity-closing">
          Everyone talks about community and fans. Almost no one knows how to build the system that actually moves these numbers. That's what I do.
        </p>
      </div>
    </section>
  )
}

function FlywheelSection({ setActiveSection }) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('system')
    }
  })

  return (
    <section id="system" ref={ref} className="flywheel-section">
      <div className="flywheel-wrapper">
        <div className="flywheel-text">
          <span className="section-label">The System</span>
          <h2>The Fandom Flywheel</h2>
          <p>
            Three systems working together in a continuous loop, creating compounding growth that reduces reliance on paid acquisition.
          </p>
          <p>
            Brand creates stories, identity, and moments worth participating in. Product designs loops, rewards, and experiences that drive repeat behavior. Community amplifies through UGC, word-of-mouth, and owned relationships. Each part feeds the others.
          </p>
        </div>

        <Suspense
          fallback={<div className="flywheel-diagram-container flywheel-diagram-placeholder" aria-hidden="true" />}
        >
          <FlywheelDiagram />
        </Suspense>
      </div>
    </section>
  )
}

function FocusSection({ setActiveSection }) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('focus')
    }
  })

  const focusAreas = [
    {
      icon: <RepeatIcon />,
      title: "Gamified retention loops",
      description: "Designing recurring behaviors that increase repeat usage and revenue, especially among high-value cohorts."
    },
    {
      icon: <SparklesIcon />,
      title: "Participation rituals",
      description: "Creating customer-first experiences that spark word-of-mouth and organic content at scale."
    },
    {
      icon: <RouteIcon />,
      title: "Lifecycle systems",
      description: "Mapping the journey from first contact to loyal fan, with interventions that reduce churn and build habit."
    },
    {
      icon: <RocketIcon />,
      title: "Release-to-fandom",
      description: "Turning launches and drops into ongoing engagement cycles for music, entertainment, and gaming."
    },
    {
      icon: <UsersIcon />,
      title: "Creator partnerships",
      description: "Closing brand partnerships that align with your positioning, not just your reach targets."
    },
    {
      icon: <ChartIcon />,
      title: "Measurement models",
      description: "Defining what participation and retention actually mean for your business, and how to track it."
    }
  ]

  return (
    <section id="focus" ref={ref} className="section section-subtle">
      <div id="what-i-focus-on" aria-hidden="true"></div>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">What I Focus On</span>
          <h2 className="section-title">Building systems that compound</h2>
          <p className="section-subtitle">
            Six core areas where I help brands create sustainable, fan-powered growth.
          </p>
        </div>

        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <div key={index} className="focus-card">
              <div className="focus-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrinciplesSection() {
  const principles = [
    "Early participation predicts long-term retention. Users who engage in the first 7 days are 3-5x more likely to still be active after 6 months.",
    "Referred customers retain at higher rates than paid acquisition",
    "Every friction point costs 10-20% conversion",
    "Retention gains deliver greater business impact than equivalent acquisition increases"
  ]

  return (
    <section className="principles-section">
      <div id="building-in-public" aria-hidden="true"></div>
      <div className="principles-container">
        <div className="principles-header">
          <h2>Data-backed principles</h2>
          <p>The mechanics behind fandom-driven growth</p>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={index} className="principle-item">
              <div className="principle-icon">
                <CheckCircle />
              </div>
              <span className="principle-text">{principle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrackRecordSection() {
  return (
    <section id="track-record" className="section section-subtle">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Track Record</span>
          <h2 className="section-title">12+ years of fan-powered growth</h2>
        </div>

        <div className="track-record-grid">
          <div className="track-record-text">
            <p>
              I've led teams at Ubisoft, Amazon Games, and BlaBlaCar, and built go-to-market and engagement strategies for startups and platforms across the US and Europe.
            </p>
            <p>
              Career impact to date: 100M+ reach, 70M+ community footprint managed, 60M+ organic content views generated, six-figure sponsorship deals closed.
            </p>
            <p>
              I don't lead with case studies. I lead with pattern recognition, systems thinking, and execution across product, community, and fan engagement.
            </p>
          </div>

          <div className="track-record-stats">
            <div className="track-record-stat-card">
              <div className="track-record-stat">
                <div className="track-record-stat-number">100M+</div>
                <div className="track-record-stat-label">Influencer campaign reach</div>
              </div>
              <div className="track-record-stat">
                <div className="track-record-stat-number">70M+</div>
                <div className="track-record-stat-label">Community footprint managed</div>
              </div>
              <div className="track-record-stat">
                <div className="track-record-stat-number">60M+</div>
                <div className="track-record-stat-label">UGC views generated</div>
              </div>
            </div>
          </div>
        </div>

        <div className="track-record-logos">
          <Suspense fallback={<div className="logoloop-skeleton" aria-hidden="true" />}>
            <LogoLoop
              logos={trackRecordLogos}
              logoHeight={48}
              gap={40}
              speed={70}
              direction="left"
              fadeOut
              fadeOutColor="var(--logo-loop-bg)"
              scaleOnHover
              ariaLabel="Brands Laura has led growth for"
            />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

function HowWeWorkSection({ setActiveSection }) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('work')
    }
  })

  return (
    <section id="work" ref={ref} className="section section-dark">
      <div id="how-we-work" aria-hidden="true"></div>
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">How We Work Together</span>
          <h2 className="section-title">12-week Fandom Flywheel engagement</h2>
          <p className="section-subtitle">
            I work with 3-4 brands per year to design and install a custom system that connects brand, product, and community into one growth engine.
          </p>
        </div>

        <div className="work-timeline">
          <div className="work-step">
            <div className="work-step-number">1</div>
            <h3>Diagnostic</h3>
            <p>Understand current state, establish baseline metrics, identify gaps and opportunities.</p>
          </div>
          <div className="work-step">
            <div className="work-step-number">2</div>
            <h3>Design</h3>
            <p>Map your custom flywheel, design retention loops, create measurement framework.</p>
          </div>
          <div className="work-step">
            <div className="work-step-number">3</div>
            <h3>Install</h3>
            <p>Launch first initiatives, train teams, establish operating cadence and ongoing measurement.</p>
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-label">Investment</div>
          <div className="pricing-amount">$75k – $120k</div>
          <div className="pricing-note">Depending on scope and market</div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: 'What is a Fandom Flywheel?',
      answer: 'A Fandom Flywheel is a system that connects brand storytelling, product loops, and community participation so retention, LTV, and organic growth compound over time.'
    },
    {
      question: 'Who do you work with?',
      answer: 'I work with music labels, gaming studios, entertainment platforms, and culture-led consumer brands that want retention and community to drive growth.'
    },
    {
      question: 'What does a typical engagement include?',
      answer: 'A standard engagement is 12 weeks and covers diagnostic research, system design, and installation of the first initiatives with clear success metrics.'
    },
    {
      question: 'How do we get started?',
      answer: 'Start by booking a 30-minute intro call to align on goals, scope, and fit.'
    },
    {
      question: 'Do you work globally?',
      answer: 'Yes. Engagements are remote-first with teams across the US and Europe.'
    }
  ]

  return (
    <section className="section section-subtle">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Answers to common questions</h2>
        </div>

        <div className="faq-grid">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LlmSearchSection() {
  const llmSearchGroups = [
    {
      title: 'Retention & Churn',
      items: [
        'how to reduce customer churn in gaming',
        'why are we losing users after first month',
        'retention strategies for music streaming',
        'customer churn consultant entertainment industry',
        'improve user retention gaming studio',
        'reduce churn rate entertainment platform'
      ]
    },
    {
      title: 'Community & Engagement',
      items: [
        'how to build an engaged gaming community',
        'music fan engagement strategies',
        'community activation consultant',
        'turn casual users into superfans',
        'how to get users to come back more often',
        'increase community participation'
      ]
    },
    {
      title: 'Growth Economics',
      items: [
        'CAC too high what to do',
        'alternatives to paid acquisition',
        'organic growth consultant',
        'reduce customer acquisition cost',
        'word of mouth marketing strategy',
        'referred customer growth system'
      ]
    },
    {
      title: 'Lifecycle & Systems',
      items: [
        'lifecycle marketing consultant gaming',
        'how to design retention loops',
        'customer journey optimization consultant',
        'onboarding to retention strategy',
        'product-led growth consultant entertainment'
      ]
    },
    {
      title: 'Solution-Aware Searches',
      items: [
        'fan engagement consultant',
        'community growth strategist',
        'retention marketing expert gaming',
        'loyalty program consultant entertainment',
        'UGC strategy consultant',
        'creator partnerships consultant',
        'gaming community consultant',
        'music industry marketing consultant'
      ]
    },
    {
      title: 'Revenue Symptoms',
      items: [
        "why isn't our community monetizing",
        "users aren't spending enough",
        'how to increase lifetime value gaming',
        'revenue per user too low'
      ]
    },
    {
      title: 'Engagement Symptoms',
      items: [
        "users don't come back after first visit",
        'low engagement rate gaming community',
        'how to increase time in app',
        "users aren't sharing our content",
        'dead community forum how to fix'
      ]
    },
    {
      title: 'Growth Symptoms',
      items: [
        'organic growth stalled',
        'performance marketing not working anymore',
        'paid ads too expensive',
        'how to grow without increasing budget',
        'acquisition costs keep rising'
      ]
    },
    {
      title: 'Team & Operations',
      items: [
        "community team doesn't know what to do",
        "brand and product teams don't talk",
        'how to measure community impact',
        'proving ROI of community efforts'
      ]
    },
    {
      title: 'Comparison Searches',
      items: [
        'retention vs acquisition which matters more',
        'community manager vs community strategist',
        'in-house community vs consultant',
        'platform communities vs owned communities',
        'performance marketing vs organic growth'
      ]
    },
    {
      title: 'Gaming-Specific',
      items: [
        'how to keep players engaged between seasons',
        'gaming community best practices',
        'Discord community strategy gaming',
        'player retention consultant',
        'gaming influencer partnerships'
      ]
    },
    {
      title: 'Music-Specific',
      items: [
        'how to turn spotify listeners into fans',
        'music fan engagement beyond streaming',
        'artist community building',
        'music label retention strategy',
        'superfan monetization music'
      ]
    },
    {
      title: 'Entertainment-Specific',
      items: [
        'streaming platform retention strategy',
        'entertainment platform community growth',
        'content consumption to participation',
        'binge to loyalty strategy'
      ]
    },
    {
      title: 'Question-Based Searches',
      items: [
        'what is fan-powered growth',
        'what is a retention loop',
        'what is lifecycle marketing',
        'what is the fandom flywheel',
        'how does word of mouth marketing work',
        'why do referred customers stay longer',
        'what metrics matter for retention'
      ]
    },
    {
      title: 'Benchmark & Data Searches',
      items: [
        'average churn rate gaming industry',
        'gaming community engagement benchmarks',
        'customer lifetime value entertainment',
        'retention rate benchmarks streaming',
        'word of mouth conversion rates'
      ]
    }
  ]

  return (
    <section className="section llm-section" aria-hidden="true">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Search Intent</span>
          <h2 className="section-title">Queries this site addresses</h2>
          <p className="section-subtitle">
            If you are researching retention, fan engagement, or community growth, these are the searches this work is built to answer.
          </p>
        </div>

        <div className="llm-grid">
          {llmSearchGroups.map((group) => (
            <div key={group.title} className="llm-card">
              <h3>{group.title}</h3>
              <ul className="llm-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ setActiveSection, onOpenCalendly }) {
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('contact')
    }
  })

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-content">
        <h2>Let's build something that compounds</h2>
        <p>
          If you're building for retention, not just reach — and you want to prove that fandom is the most underutilized growth system in business — let's connect.
        </p>
        <div className="contact-buttons">
          <a href="mailto:laurajanecordrey@gmail.com" className="contact-btn contact-btn-primary">
            <Mail /> Email Me
          </a>
          <a href="https://www.linkedin.com/in/lauracordrey" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-secondary">
            <Linkedin /> LinkedIn
          </a>
          <button type="button" className="contact-btn contact-btn-tertiary" onClick={onOpenCalendly}>
            <Calendar /> Calendly
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Laura Cordrey. Building fandom systems that compound.</p>
    </footer>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('')
  const [calendlyOpen, setCalendlyOpen] = useState(false)
  const [shouldRenderPrism, setShouldRenderPrism] = useState(false)
  const calendlyContainerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => setShouldRenderPrism(true), { timeout: 2500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = window.setTimeout(() => setShouldRenderPrism(true), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = calendlyOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [calendlyOpen])

  useEffect(() => {
    if (!calendlyOpen) return
    if (typeof window === 'undefined') return

    const calendlyCssHref = 'https://assets.calendly.com/assets/external/widget.css'
    const existingStyle = document.querySelector(`link[href="${calendlyCssHref}"]`)
    if (!existingStyle) {
      const styleLink = document.createElement('link')
      styleLink.rel = 'stylesheet'
      styleLink.href = calendlyCssHref
      styleLink.setAttribute('data-calendly-style', 'true')
      document.head.appendChild(styleLink)
    }

    const container = calendlyContainerRef.current
    if (!container) return

    const initWidget = () => {
      if (!container) return
      container.innerHTML = ''
      if (window.Calendly?.initInlineWidget) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: container
        })
      }
    }

    if (window.Calendly?.initInlineWidget) {
      initWidget()
      return
    }

    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    if (existingScript) {
      existingScript.addEventListener('load', initWidget, { once: true })
      return () => existingScript.removeEventListener('load', initWidget)
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = initWidget
    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [calendlyOpen])

  const openCalendly = () => setCalendlyOpen(true)
  const closeCalendly = () => setCalendlyOpen(false)

  return (
    <>
      <Navbar activeSection={activeSection} onOpenCalendly={openCalendly} />
      <Hero enablePrism={shouldRenderPrism} />
      <BeliefSection setActiveSection={setActiveSection} />
      <OpportunitySection setActiveSection={setActiveSection} />
      <FlywheelSection setActiveSection={setActiveSection} />
      <FocusSection setActiveSection={setActiveSection} />
      <PrinciplesSection />
      <TrackRecordSection />
      <HowWeWorkSection setActiveSection={setActiveSection} />
      <FaqSection />
      <LlmSearchSection />
      <ContactSection setActiveSection={setActiveSection} onOpenCalendly={openCalendly} />
      <div className={`calendly-modal ${calendlyOpen ? 'open' : ''}`} aria-hidden={!calendlyOpen}>
        <div className="calendly-modal-overlay" onClick={closeCalendly}></div>
        <div className="calendly-modal-content" role="dialog" aria-modal="true" aria-label="Book a call">
          <div className="calendly-modal-header">
            <div>
              <h3>Book a 30-min intro</h3>
              <p>Pick a time that works for you.</p>
            </div>
            <button type="button" className="calendly-modal-close" onClick={closeCalendly}>
              ×
            </button>
          </div>
          <div className="calendly-modal-body">
            <div ref={calendlyContainerRef} className="calendly-inline-widget" data-url={CALENDLY_URL}>
              <div className="calendly-loading">Loading calendar...</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
