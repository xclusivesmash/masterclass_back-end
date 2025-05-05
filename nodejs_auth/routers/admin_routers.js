const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth_middleware");
const adminMiddleware = require("../middleware/admin_middleware");

router.get("/welcome", authMiddleware, adminMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to admin page"
    });
});

module.exports = router;