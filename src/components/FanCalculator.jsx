import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import BorderGlow from './BorderGlow'
import SpotlightCard from './SpotlightCard'

const formatCurrency = (n) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toFixed(0)}`
}

const formatNumber = (n) => n.toLocaleString('en-US')

const CALENDLY_URL = 'https://calendly.com/laura-lcordrey/30min'

/* ── Dual-thumb slider on a single track ── */
function DualSlider({ min, max, valueCurrent, valueTarget, onChangeCurrent, onChangeTarget }) {
  const trackRef = useRef(null)
  const dragging = useRef(null)

  const pct = (v) => ((v - min) / (max - min)) * 100

  const valFromX = useCallback((clientX) => {
    const rect = trackRef.current.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    return Math.round(min + ratio * (max - min))
  }, [min, max])

  const handlePointerDown = useCallback((which) => (e) => {
    e.preventDefault()
    dragging.current = which
    document.body.style.userSelect = 'none'
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      const x = e.touches ? e.touches[0].clientX : e.clientX
      const val = valFromX(x)
      if (dragging.current === 'current') {
        if (val < valueTarget) onChangeCurrent(val)
      } else {
        if (val > valueCurrent) onChangeTarget(val)
      }
    }
    const onUp = () => {
      dragging.current = null
      document.body.style.userSelect = ''
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [valueCurrent, valueTarget, valFromX, onChangeCurrent, onChangeTarget])

  return (
    <div className="ds-wrap">
      <div className="ds-track" ref={trackRef}>
        <div
          className="ds-fill"
          style={{
            left: `${pct(valueCurrent)}%`,
            right: `${100 - pct(valueTarget)}%`,
          }}
        />
        <div
          className="ds-thumb ds-thumb--current"
          style={{ left: `${pct(valueCurrent)}%` }}
          onPointerDown={handlePointerDown('current')}
        />
        <div
          className="ds-thumb ds-thumb--target"
          style={{ left: `${pct(valueTarget)}%` }}
          onPointerDown={handlePointerDown('target')}
        />
      </div>
    </div>
  )
}

export default function FanCalculator() {
  const [customers, setCustomers] = useState(50000)
  const [arpu, setArpu] = useState(200)
  const [currentRetention, setCurrentRetention] = useState(50)
  const [potentialRetention, setPotentialRetention] = useState(55)
  const [years, setYears] = useState(3)

  const results = useMemo(() => {
    const baselineRevenue = customers * arpu
    const retentionDelta = potentialRetention - currentRetention

    const currentRate = currentRetention / 100
    const potentialRate = potentialRetention / 100

    let currentTotal = 0
    let potentialTotal = 0

    for (let y = 0; y < years; y++) {
      currentTotal += customers * arpu * Math.pow(currentRate, y)
      potentialTotal += customers * arpu * Math.pow(potentialRate, y)
    }

    const additionalRevenue = potentialTotal - currentTotal

    const retainedDelta = Math.round(customers * (potentialRate - currentRate))
    const referrals = Math.round(retainedDelta * 0.10)
    const referralRevenue = referrals * arpu * 1.16 * years

    return {
      baselineRevenue,
      retentionDelta,
      additionalRevenue,
      referralRevenue,
    }
  }, [customers, arpu, currentRetention, potentialRetention, years])

  const nudgeCustomers = (dir) => {
    const step = customers >= 10000 ? 5000 : 1000
    setCustomers(Math.max(100, customers + dir * step))
  }

  const nudgeArpu = (dir) => {
    const step = arpu >= 100 ? 50 : 10
    setArpu(Math.max(10, arpu + dir * step))
  }

  return (
    <BorderGlow
      borderRadius={20}
      colors={['#E8A020', '#4BBFB0', '#E8A020']}
      glowColor="232 160 32"
      backgroundColor="#141414"
      edgeSensitivity={40}
      glowRadius={60}
      style={{ maxWidth: 680, margin: '0 auto' }}
    >
      <div className="fan-calc">
        <div className="fan-calc-header">
          <span className="fan-calc-eyebrow">The Fandom Flywheel&trade; Calculator</span>
          <h3 className="fan-calc-title">The power of fan-driven growth.</h3>
          <p className="fan-calc-subtitle">Bain &amp; Company found that a 5% improvement in retention can increase profits by up to 95%. See what even a modest shift could mean for your business.</p>
        </div>

        <div className="fan-calc-body">
          {/* SECTION 1 — YOUR STARTING POINT */}
          <div className="fan-calc-section">
            <span className="fan-calc-label">Your starting point</span>
            <div className="fan-calc-inputs">
              <div className="fan-calc-input-group">
                <label>Your customers</label>
                <div className="fan-calc-num-wrap">
                  <button className="fan-calc-num-btn" onClick={() => nudgeCustomers(-1)}>&minus;</button>
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
                <label>Revenue per customer per year</label>
                <div className="fan-calc-num-wrap">
                  <button className="fan-calc-num-btn" onClick={() => nudgeArpu(-1)}>&minus;</button>
                  <input
                    type="text"
                    value={`$${formatNumber(arpu)}`}
                    onChange={e => {
                      const raw = e.target.value.replace(/[^0-9]/g, '')
                      if (raw) setArpu(Math.max(1, parseInt(raw)))
                    }}
                  />
                  <button className="fan-calc-num-btn" onClick={() => nudgeArpu(1)}>+</button>
                </div>
              </div>
            </div>
            <div className="fan-calc-baseline">
              Your baseline revenue: <strong>{formatCurrency(results.baselineRevenue)}</strong>
            </div>
          </div>

          {/* ── Connector ── */}
          <div className="fan-calc-connector">
            <div className="fan-calc-connector-line" />
            <div className="fan-calc-connector-badge">
              <span className="fan-calc-connector-label">The Fan Effect</span>
            </div>
            <div className="fan-calc-connector-line" />
          </div>

          {/* SECTION 2 — THE FAN EFFECT */}
          <div className="fan-calc-section">
            <span className="fan-calc-slider-prompt">What if you improved retention?</span>
            <p className="fan-calc-fan-explain">Fan-driven strategies target this lever &mdash; belonging, identity, recognition, and advocacy give customers reasons to stay beyond the product alone. Set your current rate on the left. Explore the potential on the right.</p>

            <DualSlider
              min={10}
              max={95}
              valueCurrent={currentRetention}
              valueTarget={potentialRetention}
              onChangeCurrent={setCurrentRetention}
              onChangeTarget={setPotentialRetention}
            />

            <div className="fan-calc-retention-labels">
              <div className="fan-calc-retention-side">
                <span className="fan-calc-retention-tag">Current retention</span>
                <span className="fan-calc-retention-val fan-calc-retention-val--current">{currentRetention}%</span>
              </div>
              <div className="fan-calc-retention-center">
                <span className="fan-calc-retention-delta">+{results.retentionDelta} points</span>
              </div>
              <div className="fan-calc-retention-side fan-calc-retention-side--right">
                <span className="fan-calc-retention-tag">Potential retention</span>
                <span className="fan-calc-retention-val fan-calc-retention-val--target">{potentialRetention}%</span>
              </div>
            </div>
          </div>

          <div className="fan-calc-divider" />

          {/* SECTION 3 — TIME HORIZON */}
          <div className="fan-calc-section">
            <span className="fan-calc-label">Time horizon</span>
            <div className="fan-calc-horizon-btns">
              {[1, 2, 3].map(y => (
                <button
                  key={y}
                  className={`fan-calc-horizon-btn${years === y ? ' fan-calc-horizon-btn--active' : ''}`}
                  onClick={() => setYears(y)}
                >
                  {y} yr{y > 1 ? 's' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* ── Connector ── */}
          <div className="fan-calc-connector">
            <div className="fan-calc-connector-line" />
            <div className="fan-calc-connector-badge">
              <span className="fan-calc-connector-label">Your Opportunity</span>
            </div>
            <div className="fan-calc-connector-line" />
          </div>

          {/* RESULT */}
          <SpotlightCard className="fan-calc-spotlight" spotlightColor="rgba(232, 160, 32, 0.15)">
            <div className="fan-calc-result-hero">
              <div className="fan-calc-result-glow" />
              <span className="fan-calc-result-value">{formatCurrency(results.additionalRevenue)}</span>
              <span className="fan-calc-result-extra">additional revenue over {years} year{years > 1 ? 's' : ''}</span>
              <p className="fan-calc-result-explain">
                This is what a {results.retentionDelta}-point retention improvement looks like when it compounds &mdash; based on your numbers.
              </p>
              {results.referralRevenue > 0 && (
                <p className="fan-calc-result-referral">
                  And if just 10% of those retained customers refer one new customer, that&apos;s another <strong>{formatCurrency(results.referralRevenue)}</strong> on top.
                  <span className="fan-calc-result-cite">Referral estimate based on 16% higher LTV per referred customer (Schmitt et al., 2011)</span>
                </p>
              )}
            </div>
          </SpotlightCard>

          {/* HOW THIS WORKS */}
          <div className="fan-calc-how">
            <h4 className="fan-calc-how-title">How this works</h4>
            <p className="fan-calc-how-body">
              Each percentage point of retention means more customers completing year 2 and year 3. The gap between current and potential widens the longer the horizon &mdash; that&apos;s the compounding effect. Fan-driven strategies like community, recognition, and advocacy programmes are one of the most cost-effective ways to move this lever. These figures are estimates based on your inputs.
            </p>
          </div>

          {/* CTA */}
          <div className="fan-calc-cta">
            <h4 className="fan-calc-cta-title">Where is your flywheel leaking?</h4>
            <a href={CALENDLY_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
              Book a Diagnostic &rarr;
            </a>
          </div>
        </div>
      </div>
    </BorderGlow>
  )
}
