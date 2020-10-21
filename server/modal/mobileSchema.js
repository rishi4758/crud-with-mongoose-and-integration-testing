const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mobileSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  color: String,
  qty: { type: Number, default: 0 },
  cart_qty: { type: Number, default: 0 },
  total: Number,
});

module.exports = mongoose.model("electro", mobileSchema);
