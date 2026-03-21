const stages = [
  { id: 'activation', number: '01', title: 'Activation', description: 'The hook that sticks', angle: -90 },
  { id: 'habit', number: '02', title: 'Habit', description: 'Loops that compound', angle: -18 },
  { id: 'belonging', number: '03', title: 'Belonging', description: 'Moments that bond', angle: 54 },
  { id: 'identity', number: '04', title: 'Identity', description: 'Where UGC is born', angle: 126 },
  { id: 'advocacy', number: '05', title: 'Advocacy', description: 'Fans become growth', angle: 198 },
]

const CX = 220
const CY = 220
const ORBIT = 145
const NODE_W = 100
const NODE_H = 72

function toRad(deg) {
  return (deg * Math.PI) / 180
}

function nodePos(angleDeg) {
  const r = toRad(angleDeg)
  return {
    x: CX + ORBIT * Math.cos(r),
    y: CY + ORBIT * Math.sin(r),
  }
}

const arcs = stages.map((s, i) => {
  const next = stages[(i + 1) % stages.length]
  const a1 = toRad(s.angle + 28)
  const a2 = toRad(next.angle - 28)
  const x1 = CX + ORBIT * Math.cos(a1)
  const y1 = CY + ORBIT * Math.sin(a1)
  const x2 = CX + ORBIT * Math.cos(a2)
  const y2 = CY + ORBIT * Math.sin(a2)
  const large = Math.abs(next.angle - s.angle) > 180 ? 1 : 0
  return { id: `arc-${i}`, d: `M ${x1} ${y1} A ${ORBIT} ${ORBIT} 0 ${large} 1 ${x2} ${y2}`, duration: 2.4 + i * 0.2, delay: i * 0.8 }
})

function StageNode({ stage }) {
  const pos = nodePos(stage.angle)
  const x = pos.x - NODE_W / 2
  const y = pos.y - NODE_H / 2

  return (
    <g className="flywheel-node-group" transform={`translate(${x}, ${y})`}>
      <g className="flywheel-node">
        <rect className="flywheel-node-card" width={NODE_W} height={NODE_H} rx="10" />
        <text className="flywheel-node-number" x={NODE_W / 2} y="18" textAnchor="middle">{stage.number}</text>
        <text className="flywheel-node-title" x={NODE_W / 2} y="38" textAnchor="middle">{stage.title}</text>
        <text className="flywheel-node-desc" x={NODE_W / 2} y="56" textAnchor="middle">{stage.description}</text>
      </g>
    </g>
  )
}

export default function FlywheelDiagram() {
  return (
    <div className="flywheel-diagram-container">
      <svg viewBox="0 0 440 440" className="flywheel-svg-clean">
        <defs>
          <marker id="arrowhead-flywheel" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0 0 L 8 4 L 0 8 Z" className="flywheel-arrow-head" />
          </marker>
          {arcs.map(a => <path key={`${a.id}-def`} id={a.id} d={a.d} />)}
        </defs>

        <g className="flywheel-arrows">
          {arcs.map((arc, i) => (
            <g key={arc.id}>
              <path d={arc.d} pathLength="100" className={`flywheel-arrow-path flywheel-arrow-${i + 1}`}>
                <animate attributeName="stroke-dashoffset" values="100;0" dur={`${arc.duration}s`} begin={`${arc.delay}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.4;0.4;0" keyTimes="0;0.15;0.85;1" dur={`${arc.duration}s`} begin={`${arc.delay}s`} repeatCount="indefinite" />
              </path>
              <g className={`flywheel-arrowhead flywheel-arrowhead-${i + 1}`}>
                <path d="M 0 -3 L 8 0 L 0 3 Z" />
                <animateMotion dur={`${arc.duration}s`} begin={`${arc.delay}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#${arc.id}`} xlinkHref={`#${arc.id}`} />
                </animateMotion>
              </g>
            </g>
          ))}
        </g>

        <g className="flywheel-center">
          <circle className="flywheel-center-circle" cx={CX} cy={CY} r="48" />
          <text className="flywheel-center-label" x={CX} y={CY - 6}>FANDOM</text>
          <text className="flywheel-center-title" x={CX} y={CY + 14}>Flywheel</text>
        </g>

        {stages.map(s => <StageNode key={s.id} stage={s} />)}
      </svg>
    </div>
  )
}
