const express = require("express");
const router = express.Router();

const CustomerModel = require("../models").Customer;

// // GET CUSTOMERS PROFILE
// router.get("/profile/:id", (req, res) => {
//   CustomerModel.findByPk(req.params.id).then((customerProfile) => {
//     res.render("customers/profile.ejs", {
//       customer: customerProfile,
//     });
//   });
// });

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN
  if (req.customers.id == req.params.id) {
    customer
      .findByPk(req.params.id, {
        include: [
          {
            model: Fruit,
            attributes: ["id", "name"],
          },
        ],
      })
      .then((customerProfile) => {
        res.render("customers/profile.ejs", {
          user: customerProfile,
        });
      });
  } else {
    // res.json("unauthorized");
    res.redirect("/");
  }
});
module.exports = router;
