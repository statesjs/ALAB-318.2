const express = require("express");
const router = express.Router();
const path = require("path");
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
//download path
router.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "../imgs/madhammy.jpg");
  res.download(filePath, "hamsterismad.jpg", (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(500).send("File failed to download.");
    }
  });
});

module.exports = router;
