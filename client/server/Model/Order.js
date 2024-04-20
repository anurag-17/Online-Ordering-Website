const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      customization: String,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "preparing", "ready", "delivered"],
    default: "pending",
  },
  
  orderDate: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: Date,

  totalAmount: {
    type: Number,
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
