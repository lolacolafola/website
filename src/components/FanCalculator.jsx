import { useState, useMemo } from 'react'

const formatCurrency = (n) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toFixed(0)}`
}

const formatNumber = (n) => n.toLocaleString('en-US')

// Research-backed assumptions
const SUPERFAN_SPEND_MULT = 2.5    // Superfans spend 2-3× more (Ehrenberg-Bass), using 2.5×
const SUPERFAN_RETENTION = 0.95    // Superfans retain at ~95%
const REGULAR_RETENTION = 0.75     // Industry-average annual retention
const REFERRAL_RATE = 0.15         // 15% of superfans refer a new customer per year

export default function FanCalculator() {
  const [customers, setCustomers] = useState(50000)
  const [arpa, setArpa] = useState(200)
  const [targetPct, setTargetPct] = useState(10)

  const results = useMemo(() => {
    // --- TODAY ---
    // Everyone at the same average. The ~10% who are superfan-adjacent
    // aren't being nurtured, so they spend like everyone else.
    const todayRevenue = customers * arpa

    // --- WITH THE FLYWHEEL ---
    // At 10%: activate the superfans already in your base
    // Above 10%: grow the cohort (bonus from the slider)
    const activatedPct = targetPct / 100
    const activatedSuperfans = Math.round(customers * activatedPct)

    // 1. Higher spend: activated superfans go from avg spend to 2.5× avg
    const spendUpliftPerFan = arpa * (SUPERFAN_SPEND_MULT - 1)
    const spendUplift = activatedSuperfans * spendUpliftPerFan

    // 2. Better retention: activated superfans retain at 95% vs 75%
    const retentionGain = Math.round(activatedSuperfans * (SUPERFAN_RETENTION - REGULAR_RETENTION))
    const retentionValue = retentionGain * arpa

    // 3. Organic referrals: activated superfans refer at 15%/yr
    const totalReferrals = Math.round(activatedSuperfans * REFERRAL_RATE)
    const referralValue = totalReferrals * arpa

    const flywheelTotal = todayRevenue + spendUplift + retentionValue + referralValue
    const flywheelUplift = spendUplift + retentionValue + referralValue
    const flywheelPct = todayRevenue > 0 ? Math.round((flywheelUplift / todayRevenue) * 100) : 0

    return {
      todayRevenue,
      activatedSuperfans,
      spendUplift,
      retentionGain,
      retentionValue,
      totalReferrals,
      referralValue,
      flywheelTotal,
      flywheelUplift,
      flywheelPct,
    }
  }, [customers, arpa, targetPct])

  const nudgeCustomers = (dir) => {
    const step = customers >= 10000 ? 5000 : 1000
    setCustomers(Math.max(100, customers + dir * step))
  }

  const nudgeArpa = (dir) => {
    const step = arpa >= 100 ? 50 : 10
    setArpa(Math.max(10, arpa + dir * step))
  }

  return (
    <div className="fan-calc">
      <div className="fan-calc-header">
        <span className="fan-calc-eyebrow">The Fandom Flywheel&trade; Calculator</span>
        <h3 className="fan-calc-title">What&apos;s your fan ecosystem worth?</h3>
        <p className="fan-calc-subtitle">Enter your numbers. We&apos;ll show what you&apos;re leaving on the table.</p>
      </div>

      <div className="fan-calc-body">
        {/* INPUTS */}
        <div className="fan-calc-section">
          <span className="fan-calc-label">Your business</span>
          <div className="fan-calc-inputs">
            <div className="fan-calc-input-group">
              <label>Total customers</label>
              <div className="fan-calc-num-wrap">
                <button className="fan-calc-num-btn" onClick={() => nudgeCustomers(-1)}>−</button>
                <input
                  type="text"
                  value={formatNumber(customers)}
                  onChange={e => {
                    const raw = e.target.value.replace(/[^0-9]/g, '')
                    if (raw) setCustomers(Math.max(1, parseInt(raw)))
                  }}
                />
                <button className="fan-calc-num-btn" onClick={() => nudgeCustomers(1)}>+</button>
              </div>
            </div>
            <div className="fan-calc-input-group">
              <label>Avg. revenue per customer / year</label>
              <div className="fan-calc-num-wrap">
                <button className="fan-calc-num-btn" onClick={() => nudgeArpa(-1)}>−</button>
                <input
                  type="text"
                  value={`$${formatNumber(arpa)}`}
                  onChange={e => {
                    const raw = e.target.value.replace(/[^0-9]/g, '')
                    if (raw) setArpa(Math.max(1, parseInt(raw)))
                  }}
                />
                <button className="fan-calc-num-btn" onClick={() => nudgeArpa(1)}>+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="fan-calc-divider" />

        {/* TODAY */}
        <div className="fan-calc-stage">
          <div className="fan-calc-stage-content">
            <span className="fan-calc-stage-label">Today</span>
            <span className="fan-calc-stage-value fan-calc-stage-value--muted">{formatCurrency(results.todayRevenue)}</span>
            <span className="fan-calc-stage-sub">your annual revenue &middot; Research shows ~10% of any customer base are already superfan-adjacent — they just aren&apos;t being nurtured.</span>
          </div>
        </div>

        <div className="fan-calc-divider" />

        {/* WITH THE FLYWHEEL */}
        <div className="fan-calc-stage fan-calc-stage--highlight">
          <div className="fan-calc-stage-content">
            <span className="fan-calc-stage-label">With the Fandom Flywheel&trade;</span>
            <span className="fan-calc-stage-value fan-calc-stage-value--gold fan-calc-stage-value--big">{formatCurrency(results.flywheelTotal)}</span>
            <span className="fan-calc-stage-sub">+{results.flywheelPct}% uplift &middot; {formatCurrency(results.flywheelUplift)} in unlocked annual revenue</span>
          </div>
        </div>

        <span className="fan-calc-breakdown-label">Where the extra {formatCurrency(results.flywheelUplift)} comes from</span>

        <div className="fan-calc-breakdown-rows">
          <div className="fan-calc-breakdown-row">
            <div className="fan-calc-breakdown-text">
              <span className="fan-calc-breakdown-title">Higher spend</span>
              <span className="fan-calc-breakdown-explain">Activated superfans spend 2.5× your average. {formatNumber(results.activatedSuperfans)} superfans × {formatCurrency(arpa * (SUPERFAN_SPEND_MULT - 1))} extra per year.</span>
              <span className="fan-calc-breakdown-source">Ehrenberg-Bass Institute</span>
            </div>
            <span className="fan-calc-breakdown-value fan-calc-breakdown-value--gold">+{formatCurrency(results.spendUplift)}</span>
          </div>

          <div className="fan-calc-breakdown-row">
            <div className="fan-calc-breakdown-text">
              <span className="fan-calc-breakdown-title">Better retention</span>
              <span className="fan-calc-breakdown-explain">Superfans retain at 95% vs 75% for regular customers. {formatNumber(results.activatedSuperfans)} superfans × 20% better retention = {formatNumber(results.retentionGain)} more customers kept × {formatCurrency(arpa)}/yr.</span>
              <span className="fan-calc-breakdown-source">Bain &amp; Company</span>
            </div>
            <span className="fan-calc-breakdown-value fan-calc-breakdown-value--gold">+{formatCurrency(results.retentionValue)}</span>
          </div>

          <div className="fan-calc-breakdown-row">
            <div className="fan-calc-breakdown-text">
              <span className="fan-calc-breakdown-title">Organic growth</span>
              <span className="fan-calc-breakdown-explain">15% of superfans refer a new customer each year. {formatNumber(results.activatedSuperfans)} superfans × 15% = {formatNumber(results.totalReferrals)} new customers × {formatCurrency(arpa)}/yr.</span>
              <span className="fan-calc-breakdown-source">Nielsen</span>
            </div>
            <span className="fan-calc-breakdown-value fan-calc-breakdown-value--teal">+{formatCurrency(results.referralValue)}</span>
          </div>
        </div>

        <div className="fan-calc-slider-section">
          <span className="fan-calc-slider-prompt">How ambitious are you?</span>
          <div className="fan-calc-slider-inline">
            <input
              type="range"
              min={10}
              max={30}
              step={1}
              value={targetPct}
              onChange={e => setTargetPct(parseInt(e.target.value))}
              className="fan-calc-range fan-calc-range--gold"
            />
            <div className="fan-calc-slider-labels">
              <span>10%</span>
              <span>{targetPct}% superfans</span>
              <span>30%</span>
            </div>
          </div>
        </div>

        <p className="fan-calc-proof">Based on: 2.5× superfan spend (Ehrenberg-Bass), 95% vs 75% retention (Bain), referral conversion rates (Nielsen). Conservative estimates.</p>
      </div>
    </div>
  )
}
