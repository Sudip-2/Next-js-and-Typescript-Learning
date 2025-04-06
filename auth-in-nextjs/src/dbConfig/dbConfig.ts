import mongoose from "mongoose";

export async function connectDb() {
  try {

    mongoose.connect(process.env.MONGO_URL!);
    //The ! asserts that process.env.MONGO_URL is never undefined or null
    const connection = mongoose.connection;
    connection.on('connected',() => {
      console.log("Connected to mongodb successfully")
    })

  } catch (error) {
    console.log("Error:",error)
  }
}
