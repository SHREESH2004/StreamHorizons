import e from "express";
import { Register } from "../controllers/Register.js";
import { Login } from "../controllers/Register.js";
import { Logout } from "../controllers/Register.js";
import { authenticate } from "../middleware/authenticate.js";
import { s } from "../controllers/ai.controllers.js";
const router=e.Router()
router.post("/chat-bot", s);
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(authenticate,Logout);
export default router;