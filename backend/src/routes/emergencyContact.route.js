import express from "express";
import {
  addContact,
  alertContacts,
} from "../controllers/emergencyContact.controller.js";

const router = express.Router();

// Add a new contact (no auth)
router.post("/add", addContact);

// Send emergency alert to all contacts (no auth)
router.post("/alert", alertContacts);

export default router;
