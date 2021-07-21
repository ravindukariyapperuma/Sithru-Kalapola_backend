const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'created'
  },
});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
