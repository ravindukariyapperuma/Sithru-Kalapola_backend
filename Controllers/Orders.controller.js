const mongoose = require("mongoose");

const Orders = require("../Models/Orders.model");

module.exports = {
  /*
   * method: GET
   * Description: Get a list of all orders
   */
  getAllOrders: async (req, res, next) => {
    try {
      const results = await Orders.find();
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: POST
   * Description: Create a new orders
   */
  createNewOrders: async (req, res, next) => {
    try {
      const orders = new Orders(req.body);
      const result = await orders.save();
      res.status(201).send(result);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: GET
   * Description: Get a orders by id
   */
  findOrdersById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const orders = await Orders.findById(id);
      if (!orders) {
        res.status(204).send("Empty Orders");
      } else {
        res.status(200).send(orders);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: PATCH
   * Description: Update a orders by id
   */
  updateAOrders: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };
      const result = await Orders.findByIdAndUpdate(id, updates, options);
      if (!result) {
        res.status(204).send("Orders does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: DELETE
   * Description: Delete a orders by id
   */
  deleteAOrders: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Orders.findByIdAndDelete(id);
      if (!result) {
        res.status(204).send("Orders does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
