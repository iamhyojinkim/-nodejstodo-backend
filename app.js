const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./route/index");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/", indexRouter);
const mongoURL = "mongodb://localhost:27017/todo-demo";

mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("DB connected", err));

app.listen(5000, () => {
  console.log("server on 5000");
});
