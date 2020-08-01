require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CustomerModel = require("../models").Customer;

// SIGN OUT ROUTE
router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
});

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
  res.render("customers/signup.ejs");
});

// POST - CREATE NEW USER FROM SIGNUP
router.post("/signup", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err);

    bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
      if (err) return res.status(500).json(err);
      req.body.password = hashedPwd;

      CustomerModel.create(req.body)
        .then((newCustomer) => {
          const token = jwt.sign(
            {
              username: newCustomer.username,
              id: newCustomer.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log(token);
          res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
          res.redirect(`/customers/profile/${newCustomer.id}`);
        })
        .catch((err) => {
          console.log(err);
          // res.send(`err ${err} duplicate username`);
          res.redirect("/auth/signup/");
        });
    });
  });
});

// GET LOGIN
router.get("/login", (req, res) => {
  res.render("customers/login.ejs");
});

// POST LOGIN
router.post("/login", (req, res) => {
  CustomerModel.findOne({
    where: {
      username: req.body.username,
    },
  }).then((foundCustomer) => {
    if (foundCustomer) {
      bcrypt.compare(
        req.body.password,
        foundCustomer.password,
        (err, match) => {
          if (match) {
            const token = jwt.sign(
              {
                username: foundCustomer.username,
                id: foundCustomer.id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "30 days",
              }
            );
            console.log(token);
            res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
            res.redirect(`/customers/profile/${foundCustomer.id}`);
          } else {
            return res.sendStatus(400);
          }
        }
      );
    }
  });
});

module.exports = router;
