// frontend/src/components/Metrics.jsx
import React from 'react';

export default function Metrics({ metrics }) {
  return (
    <div>
      <h2>Metrics</h2>
      {metrics && Object.keys(metrics).length > 0 ? (
        <ul>
          <li>Throughput: {metrics.throughput}</li>
          <li>Average PRs per week: {metrics.avgPerWeek}</li>
          <li>Total PRs: {metrics.total}</li>
        </ul>
      ) : (
        <p>No metrics available yet.</p>
      )}
    </div>
  );
}
