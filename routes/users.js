const express = require("express");
const router = express.Router();

//login
router.get("/", (req, res, next) => {
  res.render("../views/login");
});

//signup
router.get("/signup", (req, res) => {
  res.render("../views/signup");
});

//post request
router.post("/", (req, res) => {
  res.send("create user");
});

router.get("/:id", (req, res) => {
  req.params.id;
  res.send;
});

module.exports = router;
