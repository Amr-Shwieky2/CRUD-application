const cakes = require("../models/cake");

const cakesController = {
  getAllCakes: async (req, res) => {
    try {
      const cake = await cakes.find();
      res.status(201).json({
        success: true,
        data: cake,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  createCake: async (req, res) => {
    try {
      console.log(req.body);
      const cake = await cakes.create(req.body);
      res.status(201).json({
        success: true,
        data: cake,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  getCakeById: async (req, res) => {
    try {
      const cake = await cakes.findById(req.params.id);
      res.status(201).json({
        success: true,
        data: cake,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  updateCake: async (req, res) => {
    try {
      const cake = await cakes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!cake) {
        return res
          .status(404)
          .json({ success: false, message: "cake not found" });
      }
      res.status(200).json({
        success: true,
        data: cake,
      });
    } catch (error) {
      console.error(error); // It's good to log the error for debugging purposes
      res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteCake: async (req, res) => {
    try {
      const cake = await cakes.findByIdAndDelete(req.params.id);
      if (!cake) {
        return res
          .status(404)
          .json({ success: false, message: "cake not found" });
      }
      res
        .status(200)
        .json({ success: true, message: "cake deleted successfully" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = cakesController;
