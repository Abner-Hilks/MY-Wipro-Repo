const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    name: String,
    age: Number
  })
);

(async () => {
  try {
    await Student.create({ name: "John Doe", age: 22 });
    console.log("Student document inserted");
  } catch (err) {
    // ignore duplicate errors
  }
})();

module.exports = Student;
