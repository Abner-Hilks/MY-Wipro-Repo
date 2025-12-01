require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// IMPORT MODELS → this triggers auto-inserts!
require("./models/Test");
require("./models/Student");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("DB Connection Error:", err));

// Simple route
app.get("/", (req, res) => {
  res.send("Backend connected to MongoDB Atlas successfully");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
