// backend/src/controllers/enrollController.js
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

exports.enroll = async (req, res, next) => {
  try {
    const { userId, courseId } = req.body;

    // Check course exists
    const course = await Course.findOne({ courseId });
    if (!course) {
      return res.status(400).json({ success: false, data: {}, message: 'Course not found' });
    }

    // Create enrollment (unique index will prevent duplicates)
    const enrollment = new Enrollment({ userId, courseId });
    await enrollment.save();
    res.status(201).json({ success: true, data: enrollment, message: 'Enrolled successfully' });
  } catch (err) {
    // Duplicate enrollment error thrown by Mongo: code 11000
    if (err.code === 11000) {
      return res.status(400).json({ success: false, data: {}, message: 'Already enrolled' });
    }
    next(err);
  }
};
