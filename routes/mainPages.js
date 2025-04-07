const express = require("express");
const router = express.Router();

//INDEX
router.get("/", (req, res) => {
  res.render("../views/index", { name: "Jesse" });
});

//ABOUT
router.get("/about", (req, res) => {
  res.render("../views/about");
});
//Projects
router.get("/projects", (req, res) => {
  res.render("../views/projects");
});

module.exports = router;
