import jwt from 'jsonwebtoken';
import User from '../models/User.models.js';

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Token is stored in the cookies

        if (!token) {
            return res.status(401).json({ message: 'Not authenticated', success: false });
        }
        const decoded = jwt.verify(token, "shreesh"); 

        const user = await User.findById(decoded.id); 

        if (!user) {
            return res.status(401).json({ message: 'User not found', success: false });
        }

        req.user = user; 
        next(); 
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({ message: 'Invalid token', success: false });
    }
};

export {authenticate};
