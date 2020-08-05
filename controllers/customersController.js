const express = require("express");
const router = express.Router();

const CustomerModel = require("../models").Customer;
const Orders = require("../models").Order;
const Products = require("../models").Product;

// GET CUSTOMERS PROFILE
// router.get("/profile/:id", (req, res) => {
//   CustomerModel.findByPk(req.params.id).then((customerProfile) => {
//     res.render("customers/profile.ejs", {
//       customer: customerProfile,
//     });
//   });
// });

// // GET USERS PROFILE - confirm that a logged in user can only view their profile page
router.get("/profile/:id", (req, res) => {
  // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN
  console.log("the id is", req.params.id);
  console.log("the id to match is", req.customer.id);
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
      });
      // res.send(customerProfile);
    });
  } else {
    // res.json("unauthorized");
    res.redirect("/");
  }
});
module.exports = router;
