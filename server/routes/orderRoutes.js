const express = require("express");
const route = express.Router();
const orderController = require("../controllers/orderControllers");

route
  .route("/")
  .post(orderController.createOrder);



module.exports = route;
