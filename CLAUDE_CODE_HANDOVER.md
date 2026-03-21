# Fan-Led Growth Website — Claude Code Handover

## Project Overview

This is Laura Cordrey's consulting website for her Fan-Led Growth practice. It is a React + Vite single-page site. All source files live in `src/`. The goal is a premium, senior-feeling site that reads like a strategic partner who charges $65K — not a generic consultant.

---

## Tech Stack

- React 19 + Vite 7
- CSS (no UI framework)
- OGL (for hero Prism background — already built, do not touch)
- Fonts: Bricolage Grotesque (headings) + DM Sans (body) from Google Fonts
- Calendly link: `https://calendly.com/laura-lcordrey/30min`

---

## Files To Use From Outputs

The following files have been written and are ready to drop into `src/`:

- `App.jsx` — main page layout and all content
- `App.css` — all section-level styles
- `index.css` — global reset, design tokens, font imports
- `FlywheelDiagram.jsx` → goes into `src/components/FlywheelDiagram.jsx`

Do NOT replace:
- `src/components/Prism.jsx` — leave exactly as is
- `src/components/LogoLoop.jsx` — leave exactly as is

---

## Design Direction

**Overall feel:** Bold and cultural. Dark base, warm editorial. Think premium creative agency meets senior strategic operator. NOT generic SaaS dark mode.

### Colour Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-base` | `#0D0D0D` | Hero, Flywheel, Services, Final CTA sections |
| `--color-surface` | `#141414` | Charcoal — Opportunity, Why It Works, About sections |
| `--color-surface-2` | `#161616` | Cards, surface elements |
| `--color-border` | `#1E1E1E` | Default borders |
| `--color-border-light` | `#2A2A2A` | Hover/emphasis borders |
| `--color-gold` | `#E8A020` | PRIMARY accent — headlines, badges, CTAs, proof numbers |
| `--color-gold-dark` | `#C8881A` | Gold hover states |
| `--color-teal` | `#4BBFB0` | SECONDARY accent — checkmarks, arrows, creator callout |
| `--color-teal-dark` | `#3AA898` | Teal hover states |
| `--color-text` | `#F5F5F0` | Warm off-white for headings |
| `--color-text-secondary` | `#888888` | Body copy |
| `--color-text-muted` | `#444444` | Labels, tags, quiet text |

### Section Colour Rhythm (top to bottom)

1. **Hero** — `#0D0D0D` dark
2. **Opportunity** — `#141414` charcoal
3. **Flywheel** — `#0D0D0D` dark
4. **Why It Works** — `#141414` charcoal
5. **Proof** — `#071A18` deep teal (this is the hero moment of the page)
6. **Services** — `#0D0D0D` dark
7. **About** — `#141414` charcoal
8. **Final CTA** — `#0D0D0D` dark with subtle gold radial glow

> **Important note from Laura:** The current implementation may feel too dark/hard to read. If it does, consider swapping the charcoal sections (#141414) to a warm cream (#FAF8F4) with near-black text (#1A1A1A). Gold and teal accents work on both. This would give a more editorial light/dark alternating rhythm. Laura is open to this direction — use your judgment based on readability.

### Typography

- **Display font:** Bricolage Grotesque — all `h1`–`h6`
- **Body font:** DM Sans — all body copy, labels, nav
- **DO NOT use:** Inter, Roboto, system-ui as primary

---

## Page Structure (8 sections)

### 1. Hero

**Background:** `#0D0D0D` with Prism WebGL effect (already built, lazy loaded)

**Credentials line** (above headline, small caps):
```
E3 Speaker · Ubisoft · Amazon Games · BlaBlaCar · 13 years
```
Teal colour on "E3 Speaker", muted grey for the rest, dots as separators.

**Headline:**
```
Tune your fans into
your next growth engine.
```
"growth engine." in gold (#E8A020). 76px, 800 weight, -2px letter spacing.

**Subtitle:**
```
Most consumer brands are sitting on their most powerful growth asset and don't know it. I design the system that captures it.
```

**CTAs:** Two buttons — gold primary "See How It Works" (links to #services), ghost secondary "Book a Call" (Calendly link).

---

### 2. Opportunity

**Background:** `#141414` charcoal (or cream #FAF8F4 if going light/dark alternating)

**Badge:** "The Opportunity" in gold

**Headline:**
```
The most valuable growth asset you have
isn't in your acquisition budget.
```

**Body (3 paragraphs — keep concise):**

Para 1: It's already in your user base. Right now there's a cohort of people who don't just use your product — they love it. They come back unprompted. They tell friends. Almost no brand has a system to find them and build from them deliberately.

Para 2: That's not a retention problem or a community problem. **It's a design problem.** Nobody connected the product experience to the fan experience. Nobody built the layer that turns satisfaction into identity, and identity into advocacy.

Para 3: I spent 13 years inside the industry that figured this out first — building the systems that move people from first login to lifelong fan. I've built these systems, measured them, and presented them on world stages including E3. Now I bring that thinking to consumer brands who are ready to capture what's already there.

**Stat callout box** (gold-tinted border):
```
Research shows only 40% of consumers feel their favourite brands genuinely 
connect them with others — even ones they actively love. That gap is where 
growth gets left on the table.
```

---

### 3. Flywheel

**Background:** `#0D0D0D` dark

**Badge:** "The Methodology" in gold

**Headline:** The Fandom Flywheel™

**Intro:**
```
A five-stage system designed to move users from first login to lifelong fan — 
and from fan to active advocate. Built on 13 years across gaming and consumer tech.
```

**Diagram:** `FlywheelDiagram.jsx` — 5 nodes in a circle (Activation → Habit → Belonging → Identity → Advocacy). Already built in outputs. Gold arrows, dark node cards.

**Five stage cards** (grid of 5):

| # | Title | Tagline | Tactics |
|---|-------|---------|---------|
| 01 | Activation | The hook that sticks | Onboarding that creates habit / First value moments / Early engagement loops |
| 02 | Habit | Loops that compound | Gamification mechanics / Loyalty tiers and rewards / Behavioural triggers |
| 03 | Belonging | Moments that bond | Drops, events, challenges / Brand narrative that invites in / Shared fan milestones |
| 04 | Identity | Where UGC is born | Fan recognition systems / UGC infrastructure / Community intelligence into product |
| 05 | Advocacy | Fans become growth | Creator programs built to last / Referral mechanics / Brand-aligned ambassadors |

**Creator callout box** (teal left border, below the grid):
```
Creators aren't a campaign. They're a community layer.

US creator economy ad spend projected at $37 billion in 2025, up 26% year on year. 
Most brands treat creators as a one-post transaction. I build programs that turn them 
into long-term brand partners with shared values. I've closed six-figure creator 
partnerships. That's a different capability to placing media.
```

---

### 4. Why It Works

**Background:** `#141414` charcoal

**Badge:** "Why It Works" in gold

**Headline:**
```
The mechanics are proven.
Most brands just haven't applied them.
```

**Intro:** I spent 13 years inside the industry that built these systems first. Here's the research confirming they work across every consumer category.

**6 stat cards (3x2 grid):**

| Name | Data |
|------|------|
| Storytelling creates connection | Brand storytelling is 22x more memorable and drives 30% higher customer retention |
| Gamification drives engagement | Progression mechanics drive 48% higher engagement and 22% better retention |
| Loyalty programs drive revenue | Loyalty members generate 12-18% more revenue per year than non-members |
| UGC converts better than ads | UGC increases product page conversions by 161% and revenue per visitor by 154% |
| Referred customers compound | Word-of-mouth users stay 2x longer and refer others at 4x the rate |
| Superfans are your top line | Top 15-20% spend 66-80% more and drive the majority of organic growth |

**Source note:** Stanford, Harvard Business Review, Goldman Sachs, Nielsen, Luminate, Bazaarvoice (2023-2025)

---

### 5. Proof ⭐ (Hero moment of the page)

**Background:** `#071A18` deep teal — this section should feel visually distinct from everything else

**Badge:** "Proof" in teal

**Headline:** What this looks like in practice

**Intro:** Real work. Named companies. Numbers that are clean and attributable.

**4 proof cards (teal number colour):**

| Metric | Unit | Description | Tag |
|--------|------|-------------|-----|
| 6M | views · $0 spend | At Ubisoft, I built the Siege Champions Program for Rainbow Six Siege — 200 members, 18 markets, 60%+ creators. First season: 6M views, 2.4M watch-hours, 393K interactions. Zero paid media. | Ubisoft · Rainbow Six Siege |
| $32K | revenue in 3 hours | At US Mobile, designed a limited-edition superfan product from scratch. 250 units at $129. Sold out in 3 hours. No advertising. Fan identity did the work. | US Mobile · Superfan Product |
| -50% | CAC on community ads | At BlaBlaCar, community-first brand narrative — real riders, real stories — cut cost of acquisition by 50% versus the control. People respond to feeling seen, not sold to. | BlaBlaCar · Brand Storytelling |
| 60M+ | organic UGC views | Across three Ubisoft programs — 500+ members, 18 markets, 90% engagement. Community intelligence from hundreds of thousands of players fed directly into Ghost Recon product decisions. Announced at E3. | Ubisoft · Delta Company · E3 |

---

### 6. Services

**Background:** `#0D0D0D` dark
**ID:** `id="services"` (hero CTA links here)

**Badge:** "How We Work Together" in gold

**Headline:** Two ways in

**Two service cards side by side (max-width 860px centred):**

**Card 1 — Diagnostic**
- Price: $15,000
- You will get: Clarity on where your fan value is leaking and a prioritised roadmap to capture it — with the business case to act.
- Description: A 2-week structured audit across Brand, Product, and Community. I find exactly where the gaps are, what they're costing, and what to fix first.
- Deliverables: Fandom Flywheel audit across all five stages / Gap analysis with commercial impact sizing / Priority roadmap ranked by ROI / 90-min leadership presentation
- Best for: Brands who need clarity before committing to a larger engagement.

**Card 2 — Blueprint** (featured, gold border, "Most Popular" pill)
- Price: $45,000 – $65,000
- You will get: A complete fan system designed and ready to execute — every mechanic, every metric, every workflow. Built to run without ongoing dependency on me.
- Description: A 6-8 week engagement to design your complete Fandom Flywheel from Activation through to Advocacy.
- Deliverables: Complete five-stage Fandom Flywheel design / Creator and community program frameworks / Implementation roadmap with phases and owners / AI-enabled content and automation workflows / Success metrics and measurement framework / Cross-functional workshop sessions
- Best for: Brands with internal execution capacity who need expert system design.

**CTA block below cards:**
"Not sure where to start? Tell me what's breaking and we'll find the right fit."
Gold button: "Book a Free 30-Min Call" → Calendly

**Quiet line below:**
"For larger engagements including full implementation, let's talk." (teal link → Calendly)

---

### 7. About

**Background:** `#141414` charcoal

**Badge:** "Track Record" in gold

**Headline:**
```
13 years. Two industries.
One rare combination.
```

**Body copy (4 paragraphs):**

Para 1 (intro, larger): I've spent my career at the intersection of gaming and consumer tech — two industries that think about fan engagement in completely different ways. That gap is where the Fandom Flywheel came from.

Para 2: Gaming builds fan systems deliberately: progression mechanics, belonging moments, superfan activation, creator ecosystems, community intelligence feeding product decisions. I learned that at Ubisoft and Amazon Games — building programs across 18+ markets and presenting them on world stages.

Para 3: Consumer tech has the product sophistication. I brought the gaming lens to BlaBlaCar and a series of consumer startups, where the challenge was turning large user bases into advocates at scale.

Para 4: **Most people live in one world. I've built in both.** I walk into a product team and speak their language, then turn to the marketing team and speak theirs — and show them how to connect the two into something that compounds.

**4 highlight boxes (right column):**

| Title | Items |
|-------|-------|
| Where I've Built | Ubisoft — community, creators, product / Amazon Games — fan engagement / BlaBlaCar — growth and brand / Magic — fan app (founding team) |
| Numbers | 100M+ reach generated / 70M+ community footprint managed / 60M+ organic UGC views / Six-figure creator partnerships |
| Specialisms | Gamified retention / Love-brand building / Long-term creator programs / Community intelligence into product |
| How I Work | Remote-first, US timezone friendly / Strategy through to execution / English / French bilingual / Based in Paris, clients globally |

**Company logos strip (bottom):**
Ubisoft · Amazon Games · BlaBlaCar · US Mobile
(muted colour, font-weight 700 Bricolage Grotesque)

---

### 8. Final CTA

**Background:** `#0D0D0D` with subtle gold radial gradient glow

**Headline:**
```
Ready to tune your fans into
your next growth engine?
```

**Body:** Let's talk about where your fan energy is going uncaptured and what it would look like to build the system that captures it.

**CTA:** Gold button "Book a Free 30-Min Call" → Calendly

---

## Component: FlywheelDiagram.jsx

The new FlywheelDiagram.jsx file (in outputs) shows 5 nodes in a pentagon/circle layout:

- 01 Activation (top)
- 02 Habit (top right)
- 03 Belonging (bottom right)
- 04 Identity (bottom left)
- 05 Advocacy (top left)

Animated gold arrows travel between nodes clockwise. Node cards are dark (#161616) with gold number labels and white titles. Centre circle has "FANDOM / Flywheel" text.

---

## Key Positioning Notes (context for copy decisions)

- **Laura's unique positioning:** She speaks both PLG (product-led growth) and FLG (fan-led growth). Rare. She came from gaming (Ubisoft, Amazon Games) and consumer tech (BlaBlaCar). Most people live in one world. She's built in both.
- **E3 credential:** Laura presented Delta Company — a first-of-its-kind community creator program — on the Ubisoft E3 2019 stage. This is her top credibility signal and should appear near the top of the page.
- **Target client:** US consumer app or product-led tech brand, $10M-$100M ARR, with product-market fit but seeing rising CAC and flat organic growth.
- **Not gaming-first:** The gaming background is proof, not pitch. Don't lead with "gaming" — lead with the outcome for the client.
- **Creators:** Laura has senior experience building long-term creator programs, not one-off influencer placements. This is a genuine differentiator.
- **Community into product:** Laura has experience capturing community feedback and routing it into product decisions (Ghost Recon at Ubisoft). This is rare and valuable to product-led brands.

---

## Things NOT on the site (deliberately removed)

- The retention calculator iframe — cut for now, can be added back as a linked tool later
- The CFO math / improvement grid section — cut, proof cards do the job better
- "Build" service tier ($75K-$120K) — not shown publicly, to be offered in sales conversations only
- Beauty/wellness vertical — not Laura's world, removed

---

## Tone Guidelines

- Senior, confident, no hedging
- No em-dashes (—) as connectors — use commas or full stops instead
- No "genuinely", "honestly", "straightforward"
- No generic consultant language: "solutions", "deliverables-focused", "holistic"
- Short paragraphs. Headers carry weight. Let numbers speak.
- First person throughout — this is Laura's voice, not a company

---

## Responsive Breakpoints

- `max-width: 1100px` — stages grid goes 3-col, proof grid goes 2-col
- `max-width: 1024px` — services and about go single column, h1 drops to 52px
- `max-width: 768px` — stages go 2-col, proof goes 1-col, h1 drops to 38px, final CTA h2 drops to 30px
