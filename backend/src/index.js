import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const SERVERPORT = process.env.PORT || 3010;

const app = express();

app.use(express.json());
app.use(cors);

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

app.listen(SERVERPORT, () => {
  console.log(`server started on Port ${SERVERPORT}`);
});
