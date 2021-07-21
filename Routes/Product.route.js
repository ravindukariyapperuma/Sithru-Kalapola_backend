const express = require("express");
const router = express.Router();
const upload = require("../Uploadmiddleware/upload");

const ProductController = require("../Controllers/Product.controller");

/*
 * method: GET
 * Description: Get a list of all products
 */
router.get("/", ProductController.getAllProducts);

/*
 * method: POST
 * Description: Create a new product
 */
router.post("/", upload.single("image"), ProductController.createNewProduct);

/*
 * method: GET
 * Description: Get a product by id
 */
router.get("/:id", ProductController.findProductById);

/*
 * method: PATCH
 * Description: Update a product by id
 */
router.patch("/:id",upload.single('image'), ProductController.updateAProduct);

/*
 * method: DELETE
 * Description: Delete a product by id
 */
router.delete("/:id", ProductController.deleteAProduct);

module.exports = router;
