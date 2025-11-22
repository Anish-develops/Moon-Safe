import { Router } from "express";
import {
  getUserSettings,
  updateUserSettings,
} from "../controllers/settings.controller.js";

const router = Router();

router.route("/settings").get(getUserSettings).put(updateUserSettings);

export default router;
