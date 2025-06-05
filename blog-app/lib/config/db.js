import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGODBURL);
  console.log("DB connected");
};
