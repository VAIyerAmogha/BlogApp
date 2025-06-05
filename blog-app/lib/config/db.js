import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://amoghavaiyer:Amogha123@cluster0.pbxt91y.mongodb.net/blog-app"
  );
  console.log("DB connected");
};
