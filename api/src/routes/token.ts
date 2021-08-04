import express from "express";
import passport from "passport";
import { isLoggedIn } from "../middlewares/authMiddleware";
import User from "../models/User";
import { encryptPassword } from "../util/passwordUtils";

const token = express.Router();

// uses 'username' and 'password' field
token.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/notes",
    failureFlash: true,
  })
);

token.post("/logout", (req, res) => {
  req.logout();
});

export default token;
