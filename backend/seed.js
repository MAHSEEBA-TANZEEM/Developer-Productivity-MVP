const mongoose = require('mongoose');
const PR = require('./models/PR');
require('dotenv').config();

// Use Atlas URI from .env or local MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dev_mvp')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection error:', err));

const samplePRs = [
  {
    pr_id: "PR001",
    title: "Fix login bug",
    author: "dev1",
    reviewer: "dev2",
    opened_at: new Date("2026-05-01T10:00:00"),
    merged_at: new Date("2026-05-03T15:00:00"),
    status: "merged"
  },
  {
    pr_id: "PR002",
    title: "Add dashboard feature",
    author: "dev3",
    reviewer: "dev1",
    opened_at: new Date("2026-05-02T09:00:00"),
    merged_at: new Date("2026-05-06T18:00:00"),
    status: "merged"
  }
];

async function seed() {
  await PR.deleteMany({});
  await PR.insertMany(samplePRs);
  console.log("🌱 Database seeded!");
  mongoose.connection.close();
}

seed();
