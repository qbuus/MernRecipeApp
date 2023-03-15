import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resp = await RecipeModel.find({});
    res.json(resp);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  const recipe = new RecipeModel(req.body);
  try {
    const resp = await recipe.save();
    res.json(resp);
  } catch (error) {
    console.error(error);
  }
});

export { router as RecipeRouter };
