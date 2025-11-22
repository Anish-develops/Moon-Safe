import SafetySetting from "../models/settings.model.js";

const DEFAULT_SETTINGS = {
    voiceActivation: true,
    autoLocation: true,
    audioRecording: true,
    vibrationAlerts: false,
    pushNotifications: true,
    pin: "",
};

const resolveUserId = (req) => {
    return (
        req.user?._id?.toString() ||
        req.params?.userId ||
        req.body?.userId ||
        req.query?.userId ||
        null
    );
};

export const getUserSettings = async (req, res) => {
    try {
        const userId = resolveUserId(req);
        if (!userId) {
            return res
                .status(400)
                .json({ message: "userId is required in auth, params, body, or query" });
        }

        const settings = await SafetySetting.findOne({ user: userId }).lean();
        if (!settings) {
            return res.status(200).json({ settings: { ...DEFAULT_SETTINGS, user: userId } });
        }

        return res.status(200).json({ settings });
    } catch (error) {
        console.error("[settings] getUserSettings error", error);
        return res.status(500).json({ message: "Unable to fetch settings" });
    }
};

export const updateUserSettings = async (req, res) => {
    try {
        const userId = resolveUserId(req);
        if (!userId) {
            return res
                .status(400)
                .json({ message: "userId is required in auth, params, body, or query" });
        }

        const updates = {};
        const booleanFields = [
            "voiceActivation",
            "autoLocation",
            "audioRecording",
            "vibrationAlerts",
            "pushNotifications",
        ];

        booleanFields.forEach((field) => {
            if (typeof req.body?.[field] === "boolean") {
                updates[field] = req.body[field];
            }
        });

        if (typeof req.body?.pin === "string") {
            updates.pin = req.body.pin.trim();
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "Provide at least one setting to update" });
        }

        const settings = await SafetySetting.findOneAndUpdate(
            { user: userId },
            {
                $set: updates,
                $setOnInsert: { user: userId },
            },
            { new: true, upsert: true },
        ).lean();

        return res.status(200).json({ message: "Settings saved", settings });
    } catch (error) {
        console.error("[settings] updateUserSettings error", error);
        return res.status(500).json({ message: "Unable to update settings" });
    }
};
