const PerformanceGraph = () => {
  return (
    <svg width="800" height="300" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">

      <rect width="100%" height="100%" fill="#fff" />
      <line x1="50" y1="250" x2="780" y2="250" stroke="#9fa1a1" />
      <text x="20" y="255" fontSize="12" fill="#9fa1a1">10</text>

      <line x1="50" y1="200" x2="780" y2="200" stroke="#9fa1a1" />
      <text x="20" y="205" fontSize="12" fill="#9fa1a1">20</text>

      <line x1="50" y1="150" x2="780" y2="150" stroke="#9fa1a1" />
      <text x="20" y="155" fontSize="12" fill="#9fa1a1">30</text>

      <line x1="50" y1="100" x2="780" y2="100" stroke="#9fa1a1" />
      <text x="20" y="105" fontSize="12" fill="#9fa1a1">40</text>

      <line x1="50" y1="50" x2="780" y2="50" stroke="#9fa1a1" />
      <text x="20" y="55" fontSize="12" fill="#9fa1a1">50</text>
      <rect x="70" y="150" width="30" height="100" fill="#9fa1a1" />
      <rect x="120" y="200" width="30" height="50" fill="#9fa1a1" />
      <rect x="170" y="200" width="30" height="50" fill="#9fa1a1" />
      <rect x="220" y="175" width="30" height="75" fill="#9fa1a1" />
      <rect x="270" y="175" width="30" height="75" fill="#9fa1a1" />
      <rect x="320" y="150" width="30" height="100" fill="#9fa1a1" />
      <rect x="370" y="100" width="30" height="150" fill="#9fa1a1" />
      <rect x="420" y="125" width="30" height="125" fill="#9fa1a1" />
    </svg>

  )
}

export default PerformanceGraph