import { Router } from "express";

import User from "../models/User";
import { encryptPassword } from "../util/passwordUtils";
import {
  checkEmail,
  checkPassword,
  validateRequest,
} from "../middlewares/validationMiddleware";

const users = Router();

users
  .route("/")
  .post(checkEmail, checkPassword, validateRequest, async (req, res) => {
    const encrypedPassword = await encryptPassword(req.body.password);
    await User.create({
      email: req.body.email,
      password: encrypedPassword,
    });
    res.redirect("/login");
  });

export default users;
