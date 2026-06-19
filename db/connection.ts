import mongoose from 'mongoose';

// 1. Database Connection Logic
const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is missing from environment variables!");
        }
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        error instanceof Error ? console.error(`Error: ${error.message}`) : console.error("Error in database connection");
        process.exit(1);
    }
};

export default connectDB;
