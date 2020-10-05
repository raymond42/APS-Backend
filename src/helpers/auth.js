import jwt from "jsonwebtoken";
import { config } from "dotenv";
import bcrypt from "bcrypt";

config();

const genToken = (user) =>
  jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

/**
 *
 * @param { password } password
 */
const hashedPassword = (password) => bcrypt.hashSync(password, 10);

/**
 *
 * @param { object } hashedPass
 * @param { object } compare
 */
const unhashPassword = (hashedPass, compare) =>
  bcrypt.compareSync(hashedPass, compare);

export { genToken, hashedPassword, unhashPassword };
