const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB

exports.DatabaseConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
