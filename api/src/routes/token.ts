import { Router } from "express";
import passport from "passport";
import { isLoggedIn } from "../middlewares/authMiddleware";
import User from "../models/User";
import { encryptPassword } from "../util/passwordUtils";

const token = Router();

// uses 'username' and 'password' field
token
  .route("/")
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/notes",
      failureFlash: true,
    }),
    (req, res) => {
      res.sendStatus(200);
    }
  )
  .delete((req, res) => {
    req.logout();
  });

export default token;
