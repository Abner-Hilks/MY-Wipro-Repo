// backend/src/routes/courses.js
const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/courseController');
const validate = require('../middleware/validate');

// POST /api/courses
router.post('/', validate.createCourse, createCourse);

// GET /api/courses
router.get('/', getCourses);

module.exports = router;
