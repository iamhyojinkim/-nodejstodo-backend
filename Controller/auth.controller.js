const authController = {};
const jwt = require("jsonwebtoken");
require("dotenv").config();

authController.authentication = (req, res) => {
  const tokenString = req.headers.authorization;
  if (!tokenString) {
    throw new Error("invalid token");
  }
  const token = tokenString.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
    if (error) {
      throw new Error("invalid token");
    }
    console.log("payload??", payload);
  });
};

module.exports = authController;
