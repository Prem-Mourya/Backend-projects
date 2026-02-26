import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUri = process.env.MONGO_URI;

export const connectDatabase = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Database connected successfuly");
  } catch (error) {
    console.log(`[Database Error] Failed to connect: ${error.message}`);
    throw new Error("Database connection failed.");
  }
};
