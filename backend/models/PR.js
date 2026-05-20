// backend/models/PR.js
const mongoose = require('mongoose');

const PRSchema = new mongoose.Schema({
  pr_id: String,
  title: String,
  author: String,
  reviewer: String,
  opened_at: Date,
  merged_at: Date,
  status: String
});

module.exports = mongoose.model('PR', PRSchema);
