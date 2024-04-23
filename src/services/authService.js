const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const authenticateUser = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return false;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid ? user : false;
  } catch (error) {
    console.log("Inside auth service");
    console.error("Error authenticating user:", error);
    throw new Error("Error in authenticating user!");
  }
};

module.exports = { generateAccessToken, authenticateUser };
