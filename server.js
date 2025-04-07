const express = require("express");
const app = express();
const PORT = 3000;

//set view engine to ejs
app.set("view engine", "ejs");

//homepage
app.get("/", (req, res) => {
  res.render("index");
});

const userRouter = require("./routes/users");

app.use("/routes/users", userRouter);

app.listen(PORT);
