// controller/webhook.js
import { Webhook } from "svix";
import User from "../models/user.js";

export const clerkWebhooks = async (req, res) => {
  try {
    // ✅ Verify webhook using rawBody (NOT JSON.stringified)
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = req.body;
    const headers = req.headers;

    // svix verify needs raw body (we will handle middleware in server.js)
    whook.verify(req.rawBody, {
      "svix-id": headers["svix-id"],
      "svix-timestamp": headers["svix-timestamp"],
      "svix-signature": headers["svix-signature"],
    });

    const { data, type } = payload;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        };

        await User.create(userData);
        console.log("✅ User created:", userData);
        res.json({ success: true });
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        };

        await User.findByIdAndUpdate(data.id, userData);
        console.log("🔄 User updated:", userData);
        res.json({ success: true });
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("🗑️ User deleted:", data.id);
        res.json({ success: true });
        break;
      }

      default:
        console.log("⚠️ Unknown event type:", type);
        res.json({ received: true });
        break;
    }
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
