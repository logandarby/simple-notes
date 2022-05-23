import { Router } from "express";

import User from "../entity/User";
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
    const user = User.create({
      email: req.body.email,
      password: encrypedPassword,
    });
    await user.save();
    res.sendStatus(200);
  });

export default users;
