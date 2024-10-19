const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/todo-demo"; // 로컬 개발용 URI 추가

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("DB connection failed", err));

// 포트 설정
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
