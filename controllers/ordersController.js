const express = require("express");
const router = express.Router();
const Order = require("../models").Order;
const Product = require("../models").Product;

//index route - get all orders
router.get("/", (req, res) => {
  Order.findAll().then((orders) => {
    res.send(orders);
  });
});

//get single order by id
router.get("/:id", (req, res) => {
  Order.findByPk(req.params.id, {
    include: [
      {
        model: Product,
      },
    ],
  }).then((order) => {
    Product.findAll().then((product) => {
      // res.send(order);
      res.render("orders/show.ejs", {
        order: order,
        product: product,
        userId: req.customer.id,
      });
    });
  });
});

// get route for editing product
router.get("/new/:id/", function (req, res) {
  Product.findByPk(req.params.id).then((product) => {
    res.render("orders/new.ejs", {
      product: product,
      userId: req.customer.id,
    });
  });
});

//Post route - takes data from the form and creates new order
router.post("/", (req, res) => {
  Order.create(req.body).then((newOrder) => {
    res.redirect(`orders/${newOrder.id}`);
  });
});

//delete a product
router.delete("/:id", (req, res) => {
  Order.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/products");
  });
});
module.exports = router;
