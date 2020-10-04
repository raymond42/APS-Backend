import Joi from "joi";
import { validationRules, options } from "../helpers/schema";

export default {
  /**
   * @description validates request body before registration
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} validation oject
   */

  signupValidation(req, res, next) {
    const userSchema = Joi.object().keys({
      first_name: validationRules.first_name,
      last_name: validationRules.last_name,
      username: validationRules.username,
      email: validationRules.email,
      password: validationRules.password,
      confirm_password: validationRules.confirm_password,
    });

    const { error } = Joi.validate(req.body, userSchema, options);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message.replace(/\\|(")/g, ""),
      });
    }
    next();
  },
};
