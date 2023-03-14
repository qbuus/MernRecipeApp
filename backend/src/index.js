import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

const SERVERPORT = process.env.PORT || 3010;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("mongoDB connected");
    app.listen(SERVERPORT, () => {
      console.log(`server started on Port ${SERVERPORT}`);
    });
  })
  .catch(console.error);
