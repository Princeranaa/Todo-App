const User = require("../model/User-Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user is already registered
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(200).json({
        success: false,
        message: "User already exists",
      });
    }

    // Secure the password
    let hashPassowrd;
    try {
      hashPassowrd = await bcrypt.hash(password, 10); // Removed re-declaration
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Error while hashing the password",
      });
    }

    // Create a new user
    const Usercreate = await User.create({
      username,
      email,
      password: hashPassowrd,
    });

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      Usercreate,
    });
  } catch (error) {
    console.error("Something went wrong while creating the user", error);
    res.status(500).json({
      success: false,
      message: "User registration failed",
    });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill the following fields",
      });
    }

    // Check for the registered user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not registered yet",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const payload = {
        email: user.email,
        id: user._id,
      };
      

      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token
      user.password = undefined
      res.cookie("token", token); // Set token as a cookie

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

