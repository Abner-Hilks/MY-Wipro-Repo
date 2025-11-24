const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");

const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Render health check endpoint
app.get("/status", (req, res) => {
  res.send("Backend is running on Render");
});

// Use Render PORT
const PORT = process.env.PORT || 3000;

// IMPORTANT: Must listen on 0.0.0.0 for Render
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = app; // Good for testing (SuperTest)
