import user from "../models/user.js";

export const auth0Webhooks = async (req, res) => {
  try {
    const { event, user: data } = req.body;

    switch (event) {
      case "user.created": {
        const userData = {
          _id: data.user_id,
          email: data.email,
          name: data.name,
          imageUrl: data.picture,
        };
        await user.create(userData);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email,
          name: data.name,
          imageUrl: data.picture,
        };
        await user.findByIdAndUpdate(data.user_id, userData);
        break;
      }

      case "user.deleted": {
        await user.findByIdAndDelete(data.user_id);
        break;
      }

      default:
        break;
    }

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
