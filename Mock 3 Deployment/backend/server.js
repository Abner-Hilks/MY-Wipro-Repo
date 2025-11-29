// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const coursesRouter = require('./src/routes/courses');
const enrollRouter = require('./src/routes/enroll');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
app.use(express.json());

// CORS (added FRONTEND_URL support but fallback keeps old logic SAME)
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

// HEALTH ROUTE (safe for deployment, does NOT change API functionality)
app.get('/', (req, res) => {
  res.send('SmartLearn Backend Running');
});

// Routes
app.use('/api/courses', coursesRouter);
app.use('/api/enroll', enrollRouter);

// 404 handling
app.use((req, res) => {
  res.status(404).json({ success: false, data: {}, message: 'Route not found' });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI;

// CONNECT ONLY IF NOT RUNNING TESTS
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(MONGO)
    .then(() => {
      console.log("MongoDB connected successfully");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error('DB connection error', err);
    });
}

module.exports = app;
