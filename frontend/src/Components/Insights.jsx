// frontend/src/components/Insights.jsx
import React from 'react';

export default function Insights({ insights }) {
  return (
    <div>
      <h2>Insights</h2>
      <p>Average Review Time: {insights.avgReviewTime} days</p>
    </div>
  );
}
