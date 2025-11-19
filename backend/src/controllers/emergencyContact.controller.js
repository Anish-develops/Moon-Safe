import EmergencyContact from "../models/emergencyContact.model.js";
import twilio from "twilio";

// Twilio credentials (set in .env)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = "whatsapp:" + process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

// Add a new emergency contact
export const addContact = async (req, res) => {
  // Defensive: ensure req.body exists before destructuring
  const body = req.body || {};
  console.log("Received /add request body:", body);

  try {
    const { name, phoneNumber, relation, user: bodyUser } = body;

    // Determine user id: prefer authenticated user, fall back to body.user
    const userId = req.user && req.user._id ? req.user._id : bodyUser;

    if (!name || !phoneNumber) {
      return res
        .status(400)
        .json({ message: "Name and phone number are required" });
    }

    if (!userId) {
      // Model requires user; caller must provide user id or be authenticated
      return res
        .status(400)
        .json({
          message: "User id is required (send auth or include 'user' in body)",
        });
    }

    const contact = new EmergencyContact({
      name,
      phoneNumber,
      relation,
      user: userId,
    });

    await contact.save();

    console.log("Creating contact:", contact);
    res.status(201).json({ message: "Contact added successfully", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Send emergency alert to all contacts
export const alertContacts = async (req, res) => {
  try {
    // Use authenticated user id or allow caller to pass user id in body
    const body = req.body || {};
    const userId = req.user && req.user._id ? req.user._id : body.user;

    if (!userId) {
      return res
        .status(400)
        .json({
          message:
            "User id is required to send alerts (authenticate or include 'user' in body)",
        });
    }

    const contacts = await EmergencyContact.find({ user: userId });
    if (!contacts || contacts.length === 0) {
      return res
        .status(404)
        .json({ message: "No emergency contacts found for this user" });
    }

    // Compose a message that may include a caller-supplied name if available
    const callerName = (req.user && req.user.name) || body.name || "A contact";
    const messageBody = `🚨 Emergency! ${callerName} needs help.`;

    const sendMessages = contacts.map((contact) =>
      client.messages.create({
        body: messageBody,
        from: fromWhatsAppNumber,
        to: "whatsapp:" + contact.phoneNumber,
      })
    );

    await Promise.all(sendMessages);
    res.status(200).json({ message: "Emergency alerts sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send alerts" });
  }
};
