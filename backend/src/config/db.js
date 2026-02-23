import mongoose from "mongoose";
// console.log(process.env.MONGO_STRING);
export const createDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_STRING);
    console.log("MongoDB connection has been established successfully");
  } catch (error) {
    console.log("connection failed", error.message);
    process.exit(1);
  }
};