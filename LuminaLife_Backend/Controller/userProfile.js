import userProfile from "../Model/userProfile.js";

const showProfile = async (req, res) => {
  try {
    const profile = await userProfile.findOne({
      where: { UserId: req.user.id },
    });
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

export default showProfile;
