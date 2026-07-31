function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>[CompanyName] Solutions</h1>

        <p className="subtitle">
          Front-End Developer Technical Assessment
        </p>

        <div className="divider" />

        <h2>Welcome!</h2>

        <p>
          Thank you for taking the time to complete our coding assessment.
          Please read the instructions below before starting.
        </p>

        <div className="section">
          <h3>Assessment Overview</h3>

          <ul>
            <li>Authentication UI</li>
            <li>Dashboard Components</li>
            <li>REST API Integration</li>
            <li>Responsive Design</li>
            <li>Bug Fixes</li>
          </ul>
        </div>

        <div className="section">
          <h3>Estimated Duration</h3>
          <p>90 Minutes</p>
        </div>

        <button>Start Assessment</button>
      </div>
    </div>
  );
}

export default App;