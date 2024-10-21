const express = require("express");
const mongoose = require("mongoose");
const indexRouter = require("./route/index");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/user/login", (req, res) => {
  res.send("login test");
});

app.get("/task", (req, res) => {
  res.send("task test!!!!!!!!!!!!!!!");
});

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/todo-demo"; // 로컬 개발용 URI 추가

mongoose
  .connect(mongoURI)
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("DB connection failed", err));

// 포트 설정
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
