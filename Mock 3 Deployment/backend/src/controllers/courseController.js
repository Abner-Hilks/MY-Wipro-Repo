// backend/src/controllers/courseController.js
const Course = require('../models/Course');

exports.createCourse = async (req, res, next) => {
  try {
    const { courseId, title, category, price } = req.body;
    const course = new Course({ courseId, title, category, price });
    await course.save();
    res.status(201).json({ success: true, data: course, message: 'Course created' });
  } catch (err) {
    // duplicate key error handled by error middleware
    next(err);
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({ success: true, data: courses, message: 'Courses fetched' });
  } catch (err) {
    next(err);
  }
};
