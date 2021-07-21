const express = require("express");
const router = express.Router();

const AuthController = require("../Controllers/Auth.controller");

/*
 * method: POST
 * Description: Authenticate User
 */
router.post("/", AuthController.loginUser);

module.exports = router;