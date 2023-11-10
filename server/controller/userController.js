const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const securepassword = async (password) => {
  const passwoordHash = await bcrypt.hash(password, 10);
  return passwoordHash;
};
const registerpage = async (req, res) => {
  try {
    const spassword = req.body.password;
    const hashpassword = await securepassword(spassword);
    req.body.password = hashpassword;
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    if (savedUser) {
      res
        .status(200)
        .send({ message: "User registered successfully", success: true });
    } else {
      res
        .status(500)
        .send({ message: "Internal Server Error", success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerpage,
};
