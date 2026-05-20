// backend/routes/pr.js
const express = require('express');
const router = express.Router();
const PR = require('../models/PR');

// Get PR throughput (merged PRs, plus avg per week and total)
router.get('/throughput', async (req, res) => {
  try {
    const prs = await PR.find({ status: 'merged' });
    const total = prs.length;

    let avgPerWeek = 0;
    if (total > 0) {
      // Find earliest opened_at and latest merged_at
      const firstPR = prs.reduce((min, pr) =>
        pr.opened_at < min.opened_at ? pr : min
      );
      const lastPR = prs.reduce((max, pr) =>
        pr.merged_at > max.merged_at ? pr : max
      );

      const days = (lastPR.merged_at - firstPR.opened_at) / (1000 * 60 * 60 * 24);
      const weeks = days / 7 || 1;
      avgPerWeek = (total / weeks).toFixed(2);
    }

    // Important: return all three fields
    res.json({
      throughput: total,
      avgPerWeek: avgPerWeek,
      total: total
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get average review time
router.get('/review-time', async (req, res) => {
  try {
    const prs = await PR.find({ status: 'merged' });

    if (prs.length === 0) {
      return res.json({ avgReviewTime: 0 });
    }

    const avgTime =
      prs.reduce((acc, pr) => {
        const diff =
          (new Date(pr.merged_at) - new Date(pr.opened_at)) /
          (1000 * 60 * 60 * 24);
        return acc + diff;
      }, 0) / prs.length;

    res.json({ avgReviewTime: avgTime.toFixed(2) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
