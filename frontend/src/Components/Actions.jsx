// frontend/src/components/Actions.jsx
import React from 'react';

export default function Actions({ insights }) {
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Suggested Actions</h2>

      {/* Condition 1: Average Review Time */}
      {insights.avgReviewTime > 3 ? (
        <p>Average review time is high — consider reassigning PRs to available reviewers.</p>
      ) : (
        <p>Review times look healthy — keep it up!</p>
      )}

      {/* Condition 2: Throughput < 5 per week */}
      {insights.throughputPerWeek < 5 ? (
        <p>Throughput is low — suggest increasing team capacity or adding reviewers.</p>
      ) : null}

      {/* Condition 3: High Throughput */}
      {insights.throughputPerWeek >= 5 ? (
        <p>Throughput is strong — celebrate team efficiency!</p>
      ) : null}
    </div>
  );
}
