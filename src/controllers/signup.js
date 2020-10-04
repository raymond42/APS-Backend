import User from "../models/User";
import { hashedPassword, genToken } from "../helpers/auth";
import sendEmail from "../helpers/notifcations/sendEmail";

export class Authentication {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} returns an object containing a response
   */
  static async signup(req, res) {
    try {
      const { first_name, last_name, username, email, password } = req.body;

      let new_user = new User({
        first_name,
        last_name,
        username,
        email,
        password,
      });
      new_user.password = hashedPassword(password);

      const user = await User.findOne({ email: email });
      if (user) {
        return res.status(409).json({
          error: `Email ${user.email} already exists`,
        });
      }

      const taken_username = await User.findOne({ username: username });
      if (taken_username) {
        return res.status(409).json({
          error: `Username ${taken_username.username} is already taken, try another one`,
        });
      }

      await new_user.save();

      const registeredUser = await User.findById(new_user._id).select(
        "-password"
      );

      const action = "verify-email";
      const userToken = genToken(new_user);
      await sendEmail(action, new_user.email, userToken);

      return res.status(201).json({
        message:
          "User created. Please, Check your email for a verification link",
        data: registeredUser,
      });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} returns an object containing a response
   */
  static async verifyEmail(req, res) {
    const userEmail = req.userData.email;

    const registeredUser = await User.findOne({ email: userEmail });
    if (registeredUser) {
      await User.findOneAndUpdate({ email: userEmail }, { verified: true });

      return res.status(200).json({
        message: `You have successfully verified your email ${userEmail}. You can now sign into your account!`,
      });
    }
  }
}

export default Authentication;
