const express = require("express");
const router = express.Router();

const PaymentController = require("../Controllers/Payment.Controller");

/*
 * method: POST
 * Description: Payment
 */
router.post("/create-checkout-session", PaymentController.CreateSession);

/*
 * method: GET
 * Description: Payment
 */
router.get("/get-checkout-session", PaymentController.RetrieveSession);

module.exports = router;
