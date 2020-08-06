require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const verifyToken = (req, res, next) => {
  let token = req.cookies.jwt;
  // let token = req.headers.cookie.split("").splice(4).join("");
  // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt

  // console.log(req.headers.cookie.split("").splice(4).join(""));
  // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt

  console.log("Cokies: ", req.cookies.jwt);

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser) {
      return res.status(401).json({ error: "Unauthorized Request" });
    }
    req.customer = decodedUser;
    // ADDS A .user PROP TO REQ FOR TOKEN USER
    console.log("token", decodedUser);

    next();
  });
};
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// HOMEPAGE
app.get("/", (req, res) => {
  res.render("customers/index.ejs");
});

app.use("/auth", require("./controllers/authController.js"));
app.use(
  "/customers",
  verifyToken,
  require("./controllers/customersController.js")
);
app.use(
  "/products",
  verifyToken,
  require("./controllers/productsController.js")
);

app.use("/orders", verifyToken, require("./controllers/ordersController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
