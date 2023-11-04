import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoConnectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/learn`)
        console.log(`mongoDB connected on host : ${mongoConnectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MONGO connection FAIL: ${error}`)
        process.exit(1)
    }
}

export default connectDB