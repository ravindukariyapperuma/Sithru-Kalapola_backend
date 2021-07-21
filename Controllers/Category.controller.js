const mongoose = require("mongoose");

const Category = require("../Models/Category.model");

module.exports = {
  /*
   * method: GET
   * Description: Get a list of all categorys
   */
  getAllCategorys: async (req, res, next) => {
    try {
      const results = await Category.find();
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: POST
   * Description: Create a new category
   */
  createNewCategory: async (req, res, next) => {
    try {
      const category = new Category(req.body);
      const result = await category.save();
      res.status(201).send(result);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: GET
   * Description: Get a category by id
   */
  findCategoryById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const category = await Category.findById(id);
      if (!category) {
        res.status(204).send("Empty Category");
      } else {
        res.status(200).send(category);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: PATCH
   * Description: Update a category by id
   */
  updateACategory: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };
      const result = await Category.findByIdAndUpdate(id, updates, options);
      if (!result) {
        res.status(204).send("Category does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: DELETE
   * Description: Delete a category by id
   */
  deleteACategory: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Category.findByIdAndDelete(id);
      if (!result) {
        res.status(204).send("Category does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
