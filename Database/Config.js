import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGODB;

const ConnectDB = async ()=>{
    try{
        const connection = await mongoose.connect(MONGO_URI);
        console.log("MongoDB connceted successfully")
    }catch(error){
        console.log(error);
    }
};

export default ConnectDB;