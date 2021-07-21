const express = require("express");
const router = express.Router();

const AdminController = require("../Controllers/Admin.controller");

/*
 * method: POST
 * Description: Authenticate Admin
 */
router.post("/auth/", AdminController.loginAdmin);

module.exports = router;