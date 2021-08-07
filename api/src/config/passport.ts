import passport from "passport";
import {
  IStrategyOptions,
  Strategy as LocalStrategy,
  VerifyFunction,
} from "passport-local";
import { ObjectId } from "mongoose";

import User from "../models/User";
import { validPassword } from "../util/passwordUtils";

const customFields: IStrategyOptions = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback: VerifyFunction = (email, password, done) => {
  User.findOne({ email })
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
  User.findById(userId, (err: Error, user: any) => {
    done(err, user);
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
