// backend/src/middleware/validate.js
const Joi = require('joi');

// Course POST validation
const createCourseSchema = Joi.object({
  courseId: Joi.string().required(),
  title: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().min(0).required()
});

// Enroll validation
const enrollSchema = Joi.object({
  userId: Joi.string().required(),
  courseId: Joi.string().required()
});

module.exports = {
  createCourse: (req, res, next) => {
    const { error } = createCourseSchema.validate(req.body);
    if (error) return res.status(400).json({ success: false, data: {}, message: error.message });
    next();
  },
  enroll: (req, res, next) => {
    const { error } = enrollSchema.validate(req.body);
    if (error) return res.status(400).json({ success: false, data: {}, message: error.message });
    next();
  }
};
