const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

// 환경변수에서 MongoDB 연결 문자열 가져오기
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/todo-demo"; // 로컬 개발용 URI 추가

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("DB connection failed", err));

// 포트 설정
const PORT = process.env.PORT || 5000; // Heroku에서 제공하는 포트 또는 로컬 포트

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
