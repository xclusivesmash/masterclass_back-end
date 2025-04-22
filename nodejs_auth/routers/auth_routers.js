// auth routes section
const express = require("express");
const router = express.Router();
const { userRegister, userLogin } = require("../controllers/auth_controllers");

router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;