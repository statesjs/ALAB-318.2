const express = require("express");
const router = express.Router();

//login view route
router.get("/", (req, res, next) => {
  res.render("../views/login");
});
//

//login post req
router.post("/", (req, res) => {
  console.log("Login submitted:", req.body);
  res.send("sign up complete");
});

//signup view route
router.get("/signup", (req, res) => {
  res.render("../views/signup");
});

//signup post request
router.post("/signup", (req, res) => {
  console.log("Signup submitted:", req.body);
  res.send(`sign up complete ${req.body}`);
});

module.exports = router;
