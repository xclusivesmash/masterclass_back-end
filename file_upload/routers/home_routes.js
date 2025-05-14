const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth_middleware");

router.get("/welcome", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Welcome to home page"
    });
});

module.exports = router;