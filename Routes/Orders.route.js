const express = require("express");
const router = express.Router();

const OrdersController = require("../Controllers/Orders.controller");

/*
 * method: GET
 * Description: Get a list of all orders
 */
router.get("/", OrdersController.getAllOrders);

/*
 * method: POST
 * Description: Create a new orders
 */
router.post("/", OrdersController.createNewOrders);

/*
 * method: GET
 * Description: Get a orders by id
 */
router.get("/:id", OrdersController.findOrdersById);

/*
 * method: PATCH
 * Description: Update a orders by id
 */
router.patch("/:id", OrdersController.updateAOrders);

/*
 * method: DELETE
 * Description: Delete a orders by id
 */
router.delete("/:id", OrdersController.deleteAOrders);

module.exports = router;
