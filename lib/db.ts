import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = global.mongoose; // check if there is a connection already , if there is, return it

if (!cached) { // if there is no connection, create a new one
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if(cached.conn){ // if there is a connection, return it
    return cached.conn;
  }
  if(!cached.promise){ // if there is no connection, create a new one
     const opts = {
      bufferCommands : false,
      maxPoolSize : 10,
     }
     cached.promise =  mongoose
       .connect(MONGODB_URI, opts)
       .then(() => mongoose.connection)
  }

  try {
    cached.conn = await cached.promise;
  } 
  catch (error) {
    cached.promise = null;
    throw error
  }
  return cached.conn;
}