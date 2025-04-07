const express = require("express");
const app = express();

//set view engine to ejs
app.set("view engine", "ejs");

const userRouter = require("./routes/users");
const mainRouter = require("./routes/mainPages");

app.use("/login", userRouter);
app.use("/", mainRouter);
//middleware for form
app.use(express.urlencoded({ extended: true }));

app.listen(3000);
