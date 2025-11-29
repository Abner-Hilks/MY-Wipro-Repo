process.env.NODE_ENV = 'test';

// backend/src/tests/enroll.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');

describe('Enrollment API', function() {
  before(async function() {
    await mongoose.connect(process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/smartlearn_test');
    // seed a course
    await Course.create({ courseId: 'C-100', title: 'Test Course', category: 'Test', price: 10 });
  });

  after(async function() {
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    await mongoose.connection.close();
  });

  it('should enroll successfully (201)', async function() {
    const res = await request(app)
      .post('/api/enroll')
      .send({ userId: 'user1', courseId: 'C-100' });
    if (res.status !== 201) throw new Error(`Expected 201 but got ${res.status}`);
  });

  it('duplicate enrollment should return 400', async function() {
    const res = await request(app)
      .post('/api/enroll')
      .send({ userId: 'user1', courseId: 'C-100' });
    if (res.status !== 400) throw new Error(`Expected 400 but got ${res.status}`);
  });
});
