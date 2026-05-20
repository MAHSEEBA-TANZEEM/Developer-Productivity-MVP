// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import Metrics from './components/Metrics';
import Insights from './components/Insights';
import Actions from './components/Actions';

function App() {
  const [metrics, setMetrics] = useState({});
  const [insights, setInsights] = useState({});

  useEffect(() => {
    fetch('/api/pr/throughput')
      .then(res => res.json())
      .then(data => setMetrics(data));

    fetch('/api/pr/review-time')
      .then(res => res.json())
      .then(data => setInsights(data));
  }, []);

  return (
    <div>
      <h1>Developer Productivity MVP</h1>
      <Metrics metrics={metrics} />
      <Insights insights={insights} />
      <Actions insights={insights} />
    </div>
  );
}

export default App;
