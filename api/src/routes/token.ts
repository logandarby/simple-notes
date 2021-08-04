import express from "express";
import passport from "passport";
import { isLoggedIn } from "../middlewares/authMiddleware";
import User from "../models/User";
import { encryptPassword } from "../util/passwordUtils";

const auth = express.Router();

auth.get("/login", (req, res) => {
  const form = `<h1>Login Page</h1>
    <form method="POST" action="/login">\
      Enter Username:<br><input type="text" name="username">\
      <br>Enter Password:<br><input type="password" name="password">\
      <br><br><input type="submit" value="Submit">
    </form>`;

  res.send(form);
});

// uses 'username' and 'password' field
auth.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/notes",
    failureFlash: true,
  })
);

auth
  .route("/register")
  .get((req, res, next) => {
    const form = `<h1>Register Page</h1>
      <form method="post" action="register">\
        Enter Username:<br><input type="text" name="username">\
        <br>Enter Password:<br><input type="password" name="password">
        <br><br><input type="submit" value="Submit">
      </form>`;

    res.send(form);
  })
  .post(async (req, res) => {
    const encrypedPassword = await encryptPassword(req.body.password);
    await User.create({
      username: req.body.username,
      password: encrypedPassword,
    });
    res.redirect("/login");
  });

auth.post("/logout", (req, res) => {
  req.logout();
});
auth.get("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

auth.get("/protected-route", isLoggedIn, (req, res) => {
  res.send("protected route!!");
});

export default auth;
