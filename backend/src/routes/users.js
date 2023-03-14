import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists" });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPass });
  await newUser.save();

  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User does not exist" });
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    return res.json({ message: "Username or Password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token, userID: user._id });
});

export default router;
