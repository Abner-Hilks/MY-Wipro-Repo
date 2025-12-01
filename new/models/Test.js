const mongoose = require("mongoose");

const Test = mongoose.model(
  "Test",
  new mongoose.Schema({
    name: String
  })
);

// Auto-insert document when model loads
(async () => {
  try {
    await Test.create({ name: "Hello Final DB" });
    console.log("Test document inserted");
  } catch (err) {
    // ignore duplicate errors
  }
})();

module.exports = Test;
