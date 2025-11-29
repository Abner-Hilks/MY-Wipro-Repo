// backend/src/routes/enroll.js
const express = require('express');
const router = express.Router();
const { enroll } = require('../controllers/enrollController');
const validate = require('../middleware/validate');

// POST /api/enroll
router.post('/', validate.enroll, enroll);

module.exports = router;
