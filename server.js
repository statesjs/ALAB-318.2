const express = require("express");
const app = express();

//set view engine to ejs
app.set("view engine", "ejs");
//middleware for form
app.use(express.urlencoded({ extended: true }));

//routers imported
const userRouter = require("./routes/users");
const mainRouter = require("./routes/mainPages");

app.use("/user", userRouter);
app.use("/", mainRouter);

app.listen(3000);
