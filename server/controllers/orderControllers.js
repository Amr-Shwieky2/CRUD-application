const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const order = await cakes.find();
      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  createOrder: async (req, res) => {
    try {
      console.log(req.body);
      const order = await cakes.create(req.body);
      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await cakes.findById(req.params.id);
      res.status(201).json({
        success: true,
        data: order,
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
};

module.exports = orderController;
