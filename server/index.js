// init setup
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

const keys = require("./keys");

app.use(cors({ origin: true, credentials: true }));
// require https
app.use((req, res, next) => {
  if (
    req.hostname !== "localhost" &&
    req.get("X-Forwarded-Proto") !== "https"
  ) {
    return res.redirect(`https://${req.hostname}${req.url}`);
  }
  return next();
});
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
  console.log(err);
});

// // add database schemas
require("./modal/mobileSchema");

require("./Router/cart.js")(app);
require("./Router/deviceList.js")(app);
// require("./Router/category.js")(app);

// connect to data base
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("connect database"));

// connect to the port
const port = process.env.PORT || 3001;
console.log("app is running at port " + 3001);

app.listen(port);
