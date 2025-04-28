import express from "express";
import multer from "multer";
import { storage } from "../Utils/cloudinaryConfig.js";
import userProfile from "../Model/userProfile.js";
import Auth from "../Middlewares/Authentication.js"
import showProfile from "../Controller/userProfile.js"
import userDashboardModel from "../Model/userDashboardModel.js"

const upload = multer({ storage });


const router = express.Router();

// Attach upload.single('image') middleware BEFORE the handler
router.post("/upload",Auth, upload.single("image"), async (req, res) => {
  try {
    console.log(req.file); 
    console.log(req.body); // Other text fields

    await userProfile.create({
      Profile: req.file.path,
      Name: req.body.name,
      Age: req.body.age,
      DOB: req.body.dob,
      Gender: req.body.gender,
      Bio: req.body.bio,
      Interests : req.body.interests,
      UserId : req.user.id
    });

await userDashboardModel.create({UserId : req.user.id})

    res.status(200).json({ message: "Profile uploaded successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

router.get("/showProfile", Auth, showProfile)

export default router;
