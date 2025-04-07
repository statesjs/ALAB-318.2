const express = require("express");
const app = express();

//set view engine to ejs
app.set("view engine", "ejs");
//custom middleware import
const timeStamp = require("./middleware/timecreated");
//middleware for form
app.use(express.urlencoded({ extended: true }));
app.use(timeStamp); //custom middleware

//routers imported
const userRouter = require("./routes/users");
const mainRouter = require("./routes/mainPages");

//implement routes with prefixed url
app.use("/user", userRouter);
app.use("/", mainRouter);

app.listen(3000);
