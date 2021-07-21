const express = require("express");
const router = express.Router();

const CategoryController = require("../Controllers/Category.controller");

/*
 * method: GET
 * Description: Get a list of all users
 */
router.get("/", CategoryController.getAllCategorys);

/*
 * method: POST
 * Description: Create a new user
 */
router.post("/", CategoryController.createNewCategory);

/*
 * method: GET
 * Description: Get a user by id
 */
router.get("/:id", CategoryController.findCategoryById);

/*
 * method: PATCH
 * Description: Update a user by id
 */
router.patch("/:id", CategoryController.updateACategory);

/*
 * method: DELETE
 * Description: Delete a user by id
 */
router.delete("/:id", CategoryController.deleteACategory);

module.exports = router;
