import passport from "passport";
import {
  IStrategyOptions,
  Strategy as LocalStrategy,
  VerifyFunction,
} from "passport-local";

import User from "../entity/User";
import { validPassword } from "../util/passwordUtils";

const customFields: IStrategyOptions = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback: VerifyFunction = (email, password, done) => {
  if (!email || !password) {
    return done(new Error("Email or Password field was not provided"));
  }
  User.findOne({ where: { email } })
    .then(async (user) => {
      if (!user) return done(null, false);
      const isValid = await validPassword(password, user.password);
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findOne({ where: { id: userId } })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

declare global {
  namespace Express {
    interface User {
      id: string;
    }
  }
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);
