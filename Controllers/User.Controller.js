import User from '../Models/User.Schema.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
export const registeruser = async (req , res)=>{
    try {
        const { username ,email ,password ,role} = req.body;
        const hashpassword = await bcrypt.hash(password, 10);
        console.log(hashpassword,"hashed  password");

        const newUser = new User({ username, email ,password:hashpassword, role});
        await newUser.save();
        
        res.status(201).json({ message: "Regitered successfully", data:newUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Registered Failed,Internal server error"});
        
    }
}

export const loginUser = async (req,res)=>{
    try {
        const { email , password} = req.body;
        const user = await User.findOne({ email });
        if(!User){
            res.status(200).json({message:"User not found"});
        }
        const passwordMatch = await bcrypt.compare(password,user.password);
        if(!passwordMatch){
            return res.status(403).json({message:"Invalid Credentials"});
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
        user.token = token;
        res.status(200).json({message:"login successfull", token:token});
    } catch (error) {
        res.status(500).json({message:"login failed,Internal server Error"});
    }
}

// getUser

export const getUser = async (req, res) => { 
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        res.status(200).json({message:'Authorized User', data:[user]})
    } catch (error) {
        res.status(500).json({err:'Internal Server Error'})
    }
}