import { Response, Request, NextFunction } from "express";
import {
  body,
  CustomValidator,
  param,
  validationResult,
} from "express-validator";
import { ObjectId } from "mongodb";
import Note from "../models/Note";
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

const isEmailUnique: CustomValidator = async (email: string) => {
  return User.findOne({ email }).then((user) => {
    if (user) {
      return Promise.reject("Email is already in use");
    }
  });
};

const isValidNoteId: CustomValidator = async (id: string) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("ID is not valid");
  }
  return Note.findById(id).then((note) => {
    if (!note) {
      return Promise.reject("Note does not exist");
    }
  });
};

// Below are the functions used to wrap and standardize express-validator
// validations/sanitizers

export const checkEmail = body("email")
  .trim()
  .normalizeEmail({ all_lowercase: false })
  .isEmail()
  .withMessage("Email is invalid")
  .custom(isEmailUnique);

export const checkPassword = body("password")
  .trim()
  .isLength({ min: 6, max: 30 })
  .withMessage("Password must be bewteen 6 and 30 characters long");

export const checkNoteId = param("id").trim().custom(isValidNoteId);
