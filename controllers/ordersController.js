const express = require("express");
const router = express.Router();
const Order = require("../models").Order;

//index route - get all orders
router.get("/", (req, res) => {
  Order.findAll().then((orders) => {
    res.send(orders);
  });
});

module.exports = router;
