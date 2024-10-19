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

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/your_database_name";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("db connected fail", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server on at ${PORT}`);
});

//몽고디비 배포 다시보기 10.17
