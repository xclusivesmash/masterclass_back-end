const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth_middleware");
const adminMiddleware = require("../middleware/admin_middleware");

// upload images
router.post("/upload", authMiddleware, adminMiddleware);
// get all images

module.exports = router;