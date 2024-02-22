const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    chef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chef",
    },
    image: {
      type: String,
    },
  },
  {
    timeseries: true,
  }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
