import { Response, Request, NextFunction } from "express";
import { body, CustomValidator, validationResult } from "express-validator";
import User from "../models/User";

type ExpressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Response | void;

/**
 * A middleware that validates any express-validator validations/sanitizers.
 * Returns code 400 with the errors array if the request is invalid.
 */

export const validateRequest: ExpressMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

// Below are custom validators/sanitizers

const isEmailUnique: CustomValidator = (email: string) => {
  return User.findOne({ email }).then((user) => {
    if (user) {
      return Promise.reject("The Email must be unique");
    }
  });
};

// Below are the functions used to wrap and standardize express-validator
// validations/sanitizers

export const checkEmail = body("email")
  .trim()
  .normalizeEmail({ all_lowercase: false })
  .isEmail()
  .custom(isEmailUnique);

export const checkPassword = body("password")
  .trim()
  .isLength({ min: 6, max: 30 });
