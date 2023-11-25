const express = require("express");
const route = express.Router();
const orderController = require("../controllers/orderControllers");

route
  .route("/")
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

route
  .route("/:id")
  .get(orderController.getOrderById);


module.exports = route;
