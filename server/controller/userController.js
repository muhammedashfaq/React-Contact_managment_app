const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asynchandler = require("express-async-handler");

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

const loginpage = asynchandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (user) {
    const passwordcheck = await bcrypt.compare(password, user.password);

    if (!passwordcheck) {
      res.status(200).send({ message: "Incorrect password", success: false });
    } else {
      res.status(200).send({ message: "Login successful", success: true });
    }
  } else {
    res.status(200).send({ message: "User not found", success: false });
  }
});

module.exports = {
  registerpage,
  loginpage,
};
