import { Router } from "express";
import { registerUser , fetchUser } from "../controllers/user.controller.js";


const router = Router();

router.route("/register").post(registerUser);
router.route("/fetch").post(fetchUser);
export default router;