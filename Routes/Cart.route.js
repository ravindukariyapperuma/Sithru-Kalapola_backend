const express = require("express");
const router = express.Router();

const CartController = require("../Controllers/Cart.controller");

/*
 * method: GET
 * Description: Get a list of all carts
 */
router.get("/", CartController.getAllCarts);

/*
 * method: POST
 * Description: Create a new cart
 */
router.post("/", CartController.createNewCart);

/*
 * method: GET
 * Description: Get a cart by id
 */
router.get("/:id", CartController.findCartById);

/*
 * method: PATCH
 * Description: Update a cart by id
 */
router.patch("/:id", CartController.updateACart);

/*
 * method: DELETE
 * Description: Delete a cart by id
 */
router.delete("/:id", CartController.deleteACart);

module.exports = router;
