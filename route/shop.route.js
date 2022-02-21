"use strict";
const express = require("express");
const router = express.Router();
const database = require("../json/products.json");
const { product } = require("../controller/product.controller.js");
router.use(function (req, res, next) {
  console.log(req.url);
  next();
});
router.get("/home", (req, res) => {
  res.render("home", { data: database });
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/product/:num", product);
module.exports = router;