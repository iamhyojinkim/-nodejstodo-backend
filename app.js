const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./route/index");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/", indexRouter);
const mongoURL = process.env.MONGODB_URI_PROD;
console.log(mongoURL);
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("DB connected", err));

app.listen(5000, () => {
  console.log("server on 5000");
});

//몽고디비 배포 다시보기 10.17
