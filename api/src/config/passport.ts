import passport from "passport";
import { Strategy as LocalStrategy, VerifyFunction } from "passport-local";
import { ObjectId } from "mongoose";

import User from "../models/User";
import { validPassword } from "../util/passwordUtils";

const verifyCallback: VerifyFunction = (username, password, done) => {
  User.findOne({ username })
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

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);
