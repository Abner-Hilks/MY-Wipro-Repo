// backend/src/middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  // Mongoose validation
  if (err.name === 'ValidationError') {
    return res.status(400).json({ success: false, data: {}, message: err.message });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(400).json({ success: false, data: {}, message: 'Duplicate key error' });
  }
  // Generic server error
  res.status(500).json({ success: false, data: {}, message: 'Server error' });
};
