import mongoose from "mongoose";

async function dbConnect() {
    if(!process.env.MONGODB_URI) {
        throw new Error("MONGO_URI is missing");
    }

    const connection = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    return connection.connection.db;
}

export default dbConnect;