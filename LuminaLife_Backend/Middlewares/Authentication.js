import jwt from "jsonwebtoken";
import User from "../Model/userModel.js";

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = jwt.verify(token, "helllo"); // Secret should ideally come from .env
    console.log(user);

    User.findOne({ where: { id: user.id } })
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false, error: "Server Error" });
      });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
};

export default auth;
