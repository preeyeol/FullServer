const express = require("express");
const userRoute = express.Router();

const {
  signUp,
  login,
  getUsers,
  profileUp,
} = require("../Controller/userController");
const { verifyToken } = require("../middleware/authMiddleware");

userRoute.post("/signup", signUp);
userRoute.post("/login", login);
userRoute.get("/", verifyToken, getUsers);
userRoute.post("/profile", verifyToken, profileUp);

module.exports = { userRoute };
