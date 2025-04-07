const express = require("express");
const router = express.Router();

//login view route
router.get("/login", (req, res, next) => {
  res.render("../views/login");
});
//

//login post req
router.post("/login", (req, res) => {
  console.log("Login submitted:", req.body);
  res.send(`Login Successful 🎉 "${req.body.username}"`);
});

//signup view route
router.get("/signup", (req, res) => {
  res.render("../views/signup");
});

//signup post request
router.post("/signup", (req, res) => {
  console.log("Signup submitted:", req.body);
  res.send(`Sign up Successful 🎉 "${req.body.username}"`);
});

//dynamic user page
router.get("/:username", (req, res) => {
  res.render("../views/user", { username: req.params.username });
});

module.exports = router;
