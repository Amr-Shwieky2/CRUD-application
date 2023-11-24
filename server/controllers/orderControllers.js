

const orderController = {
    createOrder: async (req, res) => {
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
    }
}

module.exports = orderController;