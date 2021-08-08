import { Router } from "express";
import passport from "passport";

const session = Router();

// uses 'email' and 'password' field
session
  .route("/")
  .post(passport.authenticate("local"), (req, res) => {
    res.sendStatus(200);
  })
  .delete((req, res) => {
    req.logout();
    res.sendStatus(200);
  });

export default session;
