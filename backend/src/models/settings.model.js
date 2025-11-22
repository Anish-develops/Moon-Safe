import mongoose, { Schema } from "mongoose";

const safetySettingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    voiceActivation: {
      type: Boolean,
      default: true,
    },
    autoLocation: {
      type: Boolean,
      default: true,
    },
    audioRecording: {
      type: Boolean,
      default: true,
    },
    vibrationAlerts: {
      type: Boolean,
      default: false,
    },
    pushNotifications: {
      type: Boolean,
      default: true,
    },
    pin: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true },
);

const SafetySetting = mongoose.model("SafetySetting", safetySettingSchema);

export default SafetySetting;
