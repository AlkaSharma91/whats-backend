import { User } from "../model/User.js";

export const addUser = async (req, res) => {
  try {
    console.log("add user called in server");
    const exist = await User.findOne({ googleId: req.body.googleId });
    if (exist) {
      console.log("user already exists");
      return res.status(200).json("user already exists");
    }
    console.log(req.body);
    const user = await new User(req.body);

    user.save();
    return res.status(200).json("user saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    console.log("getUsers called");
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
