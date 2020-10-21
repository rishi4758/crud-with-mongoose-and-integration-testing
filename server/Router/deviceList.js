const mongoose = require("mongoose");
const mobileSchema = mongoose.model("electro");
module.exports = (app) => {
  //fetchDevices
  app.get("/devices", async (req, res) => {
    const cat = await mobileSchema.find();

    res.send(cat);
  });

  app.post("/insert", async (req, res) => {
    const { name, description, price, color, qty, total } = req.body;

    const add = await new mobileSchema({
      name: name,
      description: description,
      price: price,
      color: color,
      qty: qty,
      cart_qty: 0,
      total: total,
    }).save();
    if (add) {
      res.send(add);
    }
  });

  app.post("/deleteDevice", async (req, res) => {
    const { id } = req.body;

    const updateCart = await mobileSchema.findByIdAndRemove({ _id: id });

    res.send(updateCart);
  });
};
