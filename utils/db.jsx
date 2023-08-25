import mongoose from "mongoose";
const portfolio_uri = process.env.DB_URI;

//1st Way to connect with database
if (!portfolio_uri) {
  throw new Error("please define db_uri");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(portfolio_uri, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
};

export default connectDB;

// //second way to connect with database
// const connectDB = async () => {
//   try {
//     await mongoose.connect(portfolio_uri);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectDB;
