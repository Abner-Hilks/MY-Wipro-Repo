const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        return res.status(403).json({ success: false, message: "No token provided" });
    }

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "SECRET123"); // same secret as login
        req.user = decoded;
        next();
    } catch {
        return res.status(403).json({ success: false, message: "Invalid token" });
    }
};
