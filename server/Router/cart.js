const { json } = require("body-parser");
const mongoose = require("mongoose");
const mobileSchema = mongoose.model("electro");
module.exports = (app) => {
  // add to cart
  app.post("/cart", async (req, res) => {
    const { id, cart, qty, total } = req.body;

    const updateCart = await mobileSchema.findByIdAndUpdate(
      { _id: id },
      { cart_qty: cart + 1, qty: qty - 1, total: total + 1 }
    );

    res.send(updateCart);
  });

  // remove from cart
  app.post("/removeCart", async (req, res) => {
    const { id, cart, qty, total } = req.body;

    const update = await mobileSchema.updateMany(
      { total: total },
      { total: total <= 0 ? 0 : total - 1 }
    );
    const updateCart = await mobileSchema.findByIdAndUpdate(
      { _id: id },
      { cart_qty: cart - 1, qty: qty + 1 }
    );

    res.send(updateCart);
  });
};
