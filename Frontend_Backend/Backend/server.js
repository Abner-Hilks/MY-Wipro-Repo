// Q9 + Q10

const express = require("express");
const logger = require("./middleware/logger");

const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

// Global logger
app.use(logger);

// Routes
app.use("/products", productRoutes);
app.use("/", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
