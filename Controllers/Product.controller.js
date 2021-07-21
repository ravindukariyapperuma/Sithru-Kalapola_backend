const mongoose = require("mongoose");

const Product = require("../Models/Product.model");

module.exports = {
  /*
   * method: GET
   * Description: Get a list of all products
   */
  getAllProducts: async (req, res, next) => {
    try {
      const results = await Product.find();
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: POST
   * Description: Create a new product
   */
  createNewProduct: async (req, res, next) => {
    try {
      const name = req.body.name;
      const description = req.body.description;
      const maincategory = req.body.maincategory;
      const subcategory = req.body.subcategory;
      const price = req.body.price;
      const status = req.body.status;

      const product = new Product({
        name,
        description,
        maincategory,
        subcategory,
        price,
        status,
      });
      if (req.file) {
        product.image = req.file.path;
      }

      const result = await product.save();
      res.status(201).send(result);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: GET
   * Description: Get a product by id
   */
  findProductById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      if (!product) {
        res.status(204).send("Empty Products");
      } else {
        res.status(200).send(product);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: PATCH
   * Description: Update a product by id
   */
  updateAProduct: async (req, res, next) => {
    try {
      const name = req.body.name;
      const description = req.body.description;
      const maincategory = req.body.maincategory;
      const subcategory = req.body.subcategory;
      const price = req.body.price;
      const status = req.body.status;

      const product = {
        name,
        description,
        maincategory,
        subcategory,
        price,
        status,
      };
      if (req.file) {
        product.image = req.file.path;
      }

      const id = req.params.id;
      const updates = product;
      const options = { new: true };
      const result = await Product.findByIdAndUpdate(id, updates, options);
      if (!result) {
        res.status(204).send("Product does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: DELETE
   * Description: Delete a product by id
   */
  deleteAProduct: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Product.findByIdAndDelete(id);
      if (!result) {
        res.status(204).send("Product does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
