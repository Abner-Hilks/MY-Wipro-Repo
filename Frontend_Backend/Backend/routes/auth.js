const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const STATIC_USER = {
    email: "admin@test.com",
    password: "12345"
};

// LOGIN
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email !== STATIC_USER.email || password !== STATIC_USER.password) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { email: STATIC_USER.email },
        "SECRET123",
        { expiresIn: "1h" }
    );

    res.json({ success: true, message: "Login successful", token });
});

// PROTECTED ROUTE
router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the dashboard!",
        user: req.user
    });
});

module.exports = router;
