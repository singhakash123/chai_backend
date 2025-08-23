import mongoose from "mongoose";
import { db_name } from "../constant.js";

export const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect( `${process.env.MONGODB_URI}/${db_name}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(
      `✅ MongoDB connected: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    throw error; // throw so it can be caught in server.js 
  }
};


/*
⚡ Real-World Usage

throw error
Jab tu chaahta hai ki caller decide kare error ke baad kya karna hai
Reusable functions (e.g. connectDb) → yaha throw karna better hai

process.exit(1)
Jab tu startup stage me ho aur error ka matlab hai app ko band karna hi hoga
Production startup (DB connect fail, port bind fail, env missing)

*/