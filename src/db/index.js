import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("Connected to MongoDB successfully");
    connection.connection.on("error", (error) => {
      console.log("MongoDB connection error:", error);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
