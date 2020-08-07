const express = require("express");
const router = express.Router();
const Product = require("../models").Product;
const Customer = require("../models").Customer;

//index route - get all product
router.get("/", (req, res) => {
  Product.findAll().then((products) => {
    res.render("products/index.ejs", {
      products: products,
      userId: req.customer.id,
    });
  });
});

// NEW ROUTE - SEND EMPTY FORM
router.get("/new", (req, res) => {
  res.render("products/new.ejs", {
    //   console.log(product);
    userId: req.customer.id,
  });
});

//Post route - takes data from the form and creates new product
router.post("/", (req, res) => {
  Product.create(req.body).then((newProduct) => {
    // res.redirect("product/index.ejs");
    res.redirect(`/products/${newProduct.id}`);
  });
});

//show route - get one product
router.get("/:id", (req, res) => {
  Product.findByPk(req.params.id).then((product) => {
    res.render("products/show.ejs", {
      product: product,
      userId: req.customer.id,
    });
  });
});

// get route for editing product
router.get("/edit/:id/", function (req, res) {
  Product.findByPk(req.params.id).then((product) => {
    res.render("products/edit.ejs", {
      product: product,
      userId: req.customer.id,
    });
  });
});

//Put route to update changes
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((product) => {
    res.redirect("/products/");
  });
});

//delete a product
router.delete("/:id", (req, res) => {
  Product.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/products");
  });
});
module.exports = router;
