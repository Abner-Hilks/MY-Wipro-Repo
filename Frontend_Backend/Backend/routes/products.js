const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

let products = [
    { id: 1, name: "Cricket Bat", price: 5000 },
    { id: 2, name: "Gloves", price: 1500 }
];

// GET /products
router.get("/", (req, res) => {
    res.json({ success: true, products });
});

// POST /products
router.post(
    "/",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("price").isNumeric().withMessage("Price must be a number")
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { name, price } = req.body;
        const newProduct = { id: products.length + 1, name, price };

        products.push(newProduct);

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: newProduct
        });
    }
);

module.exports = router;
