const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },       // for this test we keep userId as string
  courseId: { type: String, required: true },     // store courseId (string)
  enrolledOn: { type: Date, default: Date.now }
});

// Index to prevent duplicate enrollments for same user-course
EnrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
