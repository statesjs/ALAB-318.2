const express = require("express");
const router = express.Router();

//login
router.get("/login", (req, res, next) => {
  console.log(req, res);
  res.render("/views/login");
});

//about page
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
