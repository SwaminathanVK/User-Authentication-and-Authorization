import jwt from 'jsonwebtoken';
import User from '../Models/User.Schema.js';
import dotenv from 'dotenv';
dotenv.config();

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')
    // const token = req.headers.authorization?.split(' ')[1];     //('') bearer[1]
    if (!token) {
        return res.status(401).json({message:"Token is Missing!"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        console.log(req.user);
        const user = await User.findById(req.user._id)

        if (user.role != 'Admin') {
            return res.status(401).json({message:'Access Deny'})
        }
        next();
    } catch (error) {
        res.status(500).json({message:'Invalid Token, Internal Server Error'})
    }
}

export default authMiddleware;