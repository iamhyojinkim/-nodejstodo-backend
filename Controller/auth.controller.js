const authController = {};
const jwt = require("jsonwebtoken");
require("dotenv").config();

authController.authentication = (req, res) => {
  const tokenString = req.headers.authorization;

  if (!tokenString) {
    return res.status(401).json({ error: "토큰이 없습니다." });
  }

  const token = tokenString.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
    if (error) {
      return res.status(401).json({ error: "유효하지 않은 토큰입니다." });
    }

    console.log("payload:", payload);
    res.status(200).json({ status: "success", payload });
  });
};

module.exports = authController;
