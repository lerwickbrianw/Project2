const express = require("express");
const order = require("../models/order");
const router = express.Router();

const CustomerModel = require("../models").Customer;
const Orders = require("../models").Order;
const Products = require("../models").Product;

// GET CUSTOMERS PROFILE
router.get("/", (req, res) => {
  Products.findAll().then((products) => {
    res.render("customers/index.ejs", {
      products: products,
      userId: req.customer.id,
    });
  });
});

// // GET USERS PROFILE - confirm that a logged in user can only view their profile page
router.get("/profile/:id", (req, res) => {
  // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN

  if (req.customer.id == req.params.id) {
    CustomerModel.findByPk(req.params.id, {
      include: [
        {
          model: Products,
        },
      ],
    }).then((customerProfile) => {
      res.render("customers/profile.ejs", {
        customer: customerProfile,
        userId: req.customer.id,
      });
      // res.send(customerProfile);
    });
  } else {
    // res.json("unauthorized");
    res.redirect("/");
  }
});
module.exports = router;
