import mongoose, { MongooseError } from "mongoose";
import { MONGO_URI } from "../lib/constants.js";

const connectDB = async () => {
  try {
    const startTime = performance.now();
    const connection = (await mongoose.connect(MONGO_URI!)).connections[0];
    if (!connection) throw new Error();

    console.log(
      `Database connected succesfully ${(performance.now() - startTime).toFixed(2)}ms`,
    );
  } catch (error: unknown) {
    if (error instanceof MongooseError) {
      console.log(error.message);
    } else if (error instanceof Error) {
      console.log((error as Error).message);
    }

    process.exit(1);
  }
};

export { connectDB };
