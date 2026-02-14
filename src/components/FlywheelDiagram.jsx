const nodes = [
  {
    id: 'brand',
    number: '01',
    title: 'Brand',
    description: 'Stories & identity',
    x: 200,
    y: 50
  },
  {
    id: 'product',
    number: '02',
    title: 'Product',
    description: 'Loops & rewards',
    x: 60,
    y: 300
  },
  {
    id: 'community',
    number: '03',
    title: 'Community',
    description: 'UGC & advocacy',
    x: 340,
    y: 300
  }
]

const NODE_WIDTH = 120
const NODE_HEIGHT = 80

const arrowPaths = [
  {
    id: 'flywheel-arrow-1',
    d: 'M 140 130 A 260 260 0 0 0 60 300',
    duration: 2.6,
    delay: 0
  },
  {
    id: 'flywheel-arrow-2',
    d: 'M 120 340 A 120 120 0 0 0 280 340',
    duration: 2.8,
    delay: 0.9
  },
  {
    id: 'flywheel-arrow-3',
    d: 'M 340 300 A 260 260 0 0 0 260 130',
    duration: 2.7,
    delay: 1.8
  }
]

function FlywheelNode({ node }) {
  const x = node.x - NODE_WIDTH / 2
  const y = node.y

  return (
    <g className="flywheel-node-group" transform={`translate(${x}, ${y})`}>
      <g className="flywheel-node">
        <rect
          className="flywheel-node-card"
          width={NODE_WIDTH}
          height={NODE_HEIGHT}
          rx="14"
        />
        <text
          className="flywheel-node-number"
          x={NODE_WIDTH / 2}
          y="24"
          textAnchor="middle"
        >
          {node.number}
        </text>
        <text
          className="flywheel-node-title"
          x={NODE_WIDTH / 2}
          y="46"
          textAnchor="middle"
        >
          {node.title}
        </text>
        <text
          className="flywheel-node-desc"
          x={NODE_WIDTH / 2}
          y="66"
          textAnchor="middle"
        >
          {node.description}
        </text>
      </g>
    </g>
  )
}

function FlywheelCenter() {
  return (
    <g className="flywheel-center">
      <circle
        className="flywheel-center-circle"
        cx="200"
        cy="225"
        r="45"
      />
      <text className="flywheel-center-label" x="200" y="217">
        FANDOM
      </text>
      <text className="flywheel-center-title" x="200" y="237">
        Flywheel
      </text>
    </g>
  )
}

export default function FlywheelDiagram() {
  return (
    <div className="flywheel-diagram-container">
      <svg viewBox="0 0 400 400" className="flywheel-svg-clean">
        <defs>
          <marker
            id="arrowhead-flywheel"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" className="flywheel-arrow-head" />
          </marker>
          {arrowPaths.map((arrow) => (
            <path key={`${arrow.id}-path`} id={arrow.id} d={arrow.d} />
          ))}
        </defs>

        <g className="flywheel-arrows">
          {arrowPaths.map((arrow, index) => (
            <g key={arrow.id} className="flywheel-arrow-group">
              <path
                d={arrow.d}
                pathLength="100"
                className={`flywheel-arrow-path flywheel-arrow-${index + 1}`}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="100;0"
                  dur={`${arrow.duration}s`}
                  begin={`${arrow.delay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur={`${arrow.duration}s`}
                  begin={`${arrow.delay}s`}
                  repeatCount="indefinite"
                />
              </path>
              <g className={`flywheel-arrowhead flywheel-arrowhead-${index + 1}`}>
                <path d="M 0 -4 L 10 0 L 0 4 Z" />
                <animateMotion
                  dur={`${arrow.duration}s`}
                  begin={`${arrow.delay}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${arrow.id}`} xlinkHref={`#${arrow.id}`} />
                </animateMotion>
              </g>
            </g>
          ))}
        </g>

        <FlywheelCenter />

        {nodes.map((node) => (
          <FlywheelNode key={node.id} node={node} />
        ))}
      </svg>
    </div>
  )
}
