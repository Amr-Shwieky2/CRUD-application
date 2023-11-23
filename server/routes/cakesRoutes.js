const express = require("express");
const route = express.Router();
const cakesController = require("../controllers/cakesControllers");

route
  .route("/")
  .get(cakesController.getAllCakes)
  .post(cakesController.createCake);

route
  .route("/:id")
  .put(cakesController.updateCake)
  .delete(cakesController.deleteCake)
  .get(cakesController.getCakeById);

module.exports = route;
