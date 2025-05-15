import bcrypt from "bcrypt";
import User from "../models/User.models.js";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if ([email, password].some((field) => !field?.trim())) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials", success: false });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Password", success: false });
        }

        const tokenData = {
            id: user._id
        };

        const token = await jwt.sign(tokenData, "shreesh", { expiresIn: "1d" });

        return res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Welcome User ${user.username}`,
            success: true
        });

    } catch (error) {
        console.error("Error during login:", error); 
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const Logout = async (req, res) => {
    return res
        .status(200)
        .cookie("token", "", { expires: new Date(0), httpOnly: true })
        .json({ message: "Logged out successfully" });
};

const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if ([username, email, password].some((field) => !field?.trim())) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export { Register };
