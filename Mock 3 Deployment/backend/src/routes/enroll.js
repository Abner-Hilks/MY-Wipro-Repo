// backend/src/routes/enroll.js
const express = require('express');
const router = express.Router();
const { enroll } = require('../controllers/enrollController');
const validate = require('../middleware/validate');
const Enrollment = require('../models/Enrollment');  // <-- Add this

// POST /api/enroll
router.post('/', validate.enroll, enroll);

// GET /api/enroll  (NEW – allows us to view all enrollments)
router.get('/', async (req, res) => {
  try {
    const data = await Enrollment.find();
    res.json({ success: true, data, message: "Enrollments fetched" });
  } catch (error) {
    res.status(500).json({ success: false, data: {}, message: "Server error" });
  }
});

module.exports = router;
