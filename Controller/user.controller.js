const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const saltRound = 10;
const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(password, salt);
    const user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({ message: "이미 존재하는 유저입니다" });
    }

    const newUser = new User({ name, email, password: hash });
    await newUser.save();
    res.status(200).json({ status: "success" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

userController.loginWithEmail = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json(error);
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (isMatch) {
      const token = user.generateToken();
      return res.status(200).json({ status: "ok", user, token });
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = userController;
