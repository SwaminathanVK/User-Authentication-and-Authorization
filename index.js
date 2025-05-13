import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './Database/Config.js';
import userRoutes from './Routers/User.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

ConnectDB();

app.use("/api/User",userRoutes);


app.listen(5004 ,()=>{
    console.log('server is running ');
})