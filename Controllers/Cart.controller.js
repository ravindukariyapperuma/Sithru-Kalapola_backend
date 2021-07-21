const mongoose = require("mongoose");

const Cart = require("../Models/Cart.model");

module.exports = {
  /*
   * method: GET
   * Description: Get a list of all carts
   */
  getAllCarts: async (req, res, next) => {
    try {
      const results = await Cart.find();
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: POST
   * Description: Create a new cart
   */
  createNewCart: async (req, res, next) => {
    try {
      const cart = new Cart(req.body);
      const result = await cart.save();
      res.status(201).send(result);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: GET
   * Description: Get a cart by id
   */
  findCartById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const cart = await Cart.findById(id);
      if (!cart) {
        res.status(204).send("Empty Cart");
      } else {
        res.status(200).send(cart);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: PATCH
   * Description: Update a cart by id
   */
  updateACart: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };
      const result = await Cart.findByIdAndUpdate(id, updates, options);
      if (!result) {
        res.status(204).send("Cart does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: DELETE
   * Description: Delete a cart by id
   */
  deleteACart: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Cart.findByIdAndDelete(id);
      if (!result) {
        res.status(204).send("Cart does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
