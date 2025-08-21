const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Place order
router.post("/", async (req, res) => {
  const { user, products, total } = req.body;
  const order = new Order({ user, products, total });
  await order.save();
  res.json({ message: "Order placed successfully" });
});

// Get order by ID
router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user");
  res.json(order);
});

module.exports = router;
