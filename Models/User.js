const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const object = this._doc;
  delete object.password;
  return object;
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
