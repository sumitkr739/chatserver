import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Db_url);
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
