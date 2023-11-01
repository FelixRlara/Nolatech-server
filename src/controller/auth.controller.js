import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { name, lastname, username, email, password, } = req.body;
    const userFound = await User.findOne({ where: { email } });
    if (userFound)
      return res.status(400).json({
        message: ["The email is already used"],
      });

    // encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user and saving in the database
    const newUser = await User.create({
      name,
      lastname,
      username,
      email,
      password: passwordHash,
    });

    // create access token
    const token = await createAccessToken({ id: newUser.dataValues.id });

    return res.json({ access_token: token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email && !username) {
      res.status(400).json({ message: 'Username or Email must be defined' })
    }

    const where = email ? { email } : { username };
    const userFound = await User.findOne({ where });

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const passwordMatches = await bcrypt.compare(password, userFound.password);

    if (!passwordMatches) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const token = await createAccessToken({ id: userFound.dataValues.id });

    return res.json({ access_token: token });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}