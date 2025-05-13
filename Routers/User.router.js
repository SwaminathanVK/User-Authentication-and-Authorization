import express from 'express';
import { getUser, loginUser, registeruser } from '../Controllers/User.Controller.js';
import authMiddleware from '../Middleware/auth.middleware.js';


const router = express.Router();

router.post('/register',registeruser);
router.post('/login',loginUser);

router.get('/getuser',authMiddleware, getUser)

export default router;