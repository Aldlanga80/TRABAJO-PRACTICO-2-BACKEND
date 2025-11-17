import mongoose, { mongo } from "mongoose";

export const connectDB = async (mongoUri: string) => {
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB conectado ✅");
  } catch (err) {
    console.error("Error al conectar a MongoDB ❌", err);
    throw err;
  }
};