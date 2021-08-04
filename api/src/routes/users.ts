import { Router } from "express";

import User from "../models/User";
import { encryptPassword } from "../util/passwordUtils";

const users = Router();

users.route("/").post(async (req, res) => {
  const encrypedPassword = await encryptPassword(req.body.password);
  await User.create({
    username: req.body.username,
    password: encrypedPassword,
  });
  res.redirect("/login");
});

export default users;
