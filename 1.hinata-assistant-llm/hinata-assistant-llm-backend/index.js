import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDatabase();
});
