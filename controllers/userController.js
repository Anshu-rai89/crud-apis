const User = require("../Modal/userSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
module.exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    // get all products from db
    return res.status(200).json({
      success: true,
      data: user.id,
    });
    // return it to user
  } catch (error) {
    return res.status(500).json({ success: false, data: "Server Error" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user with email exist in our system or not

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, data: "User Dosnt Exist Please register" });
    }

    if (user.password !== password) {
      return res
        .status(400)
        .json({ success: false, data: "User Password is Incorrect" });
    }

    const token = await jwt.sign(
      {
        name: user.name,
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    //  if user exist then check the password
    // get all products from db
    return res.status(200).json({
      success: true,
      data: {
        token,
      },
    });
    // return it to user
  } catch (error) {
    return res.status(500).json({ success: false, data: "Server Error" });
  }
};
