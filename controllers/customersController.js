const express = require("express");
const router = express.Router();

const CustomerModel = require("../models").Customer;

// GET CUSTOMERS PROFILE
router.get("/profile/:id", (req, res) => {
  CustomerModel.findByPk(req.params.id).then((customerProfile) => {
    res.render("customers/profile.ejs", {
      customer: customerProfile,
    });
  });
});

module.exports = router;
