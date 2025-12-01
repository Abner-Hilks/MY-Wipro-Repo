require("dotenv").config({ override: true });
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Debug: show if Render is sending MONGO_URI
console.log("MONGO_URI Loaded:", process.env.MONGO_URI ? "YES" : "NO");

// Handle missing Mongo URI
if (!process.env.MONGO_URI) {
  console.error("ERROR: MONGO_URI is missing. Add it in Render Environment Variables.");
  process.exit(1);
}

// Health route
app.get("/", (req, res) => {
  res.send("Backend connected to MongoDB Atlas successfully");
});

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    // Load models AFTER DB is connected
    require("./models/Test");
    require("./models/Student");

    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1); // stop deployment if DB fails
  }
}

startServer();
