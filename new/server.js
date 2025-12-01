require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Simple health route
app.get("/", (req, res) => {
  res.send("Backend connected to MongoDB Atlas successfully");
});

// Start server ONLY after DB connection
async function startServer() {
  try {
    // CONNECT TO MONGO ATLAS
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    // IMPORT MODELS AFTER DB CONNECTION
    require("./models/Test");
    require("./models/Student");

    // START SERVER
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1); // stop deployment if DB fails
  }
}

startServer();
