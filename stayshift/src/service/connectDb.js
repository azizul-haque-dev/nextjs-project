// service/connectDb.js
import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

export async function connectDb() {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    console.warn("⚠️ MONGO_URI not defined in .env.local");
    return;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log(MONGO_URI);
    cached.promise = mongoose.connect(MONGO_URI);
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB connected");
    return cached.conn;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
