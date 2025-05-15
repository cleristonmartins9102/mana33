const PerformanceHBar = () => (
  <svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        .light-bar { fill: #d3d3d3; rx: 6; ry: 6 }
        .dark-bar { fill: #9fa1a1; rx: 6; ry: 6 }
        .label { font-size: 16px; fill: #777; font-family: sans-serif; font-weight: bold }
      `}
    </style>

    <rect width="100%" height="100%" fill="#fff" />

    <rect x="80" y="30" width="120" height="12" className="light-bar" />
    <rect x="80" y="60" width="140" height="24" className="dark-bar" />
    <text x="110" y="110" className="label">↑ 70.20%</text>

    <rect x="330" y="30" width="120" height="12" className="light-bar" />
    <rect x="330" y="60" width="140" height="24" className="dark-bar" />
    <text x="360" y="110" className="label">↓ -10.00%</text>

    <rect x="580" y="30" width="120" height="12" className="light-bar" />
    <rect x="580" y="60" width="140" height="24" className="dark-bar" />
    <text x="610" y="110" className="label">↑ 13.10%</text>
  </svg>
)

export default PerformanceHBar
