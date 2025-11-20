import mongoose from "mongoose";

const emergencyContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    relation: {
      type: String,
      default: "friend",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assuming you have a User model
      required: true,
    },
  },
  { timestamps: true }
);

const EmergencyContact = mongoose.model(
  "EmergencyContact",
  emergencyContactSchema
);
export default EmergencyContact;
