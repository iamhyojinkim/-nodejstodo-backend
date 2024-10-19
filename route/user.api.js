const express = require("express");
const userController = require("../Controller/user.controller");
const authController = require("../Controller/auth.controller");
const router = express.Router();

router.post("/", userController.createUser);
router.post("/login", userController.loginWithEmail);

router.get("/me", authController.authentication);

module.exports = router;
