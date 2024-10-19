const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const mongoURI = "mongodb://localhost:27017/todo-demo";
mongoose
  .connect(mongoURI)
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("db connected fail", err));

app.listen(5000, () => console.log("server on at 5000"));
