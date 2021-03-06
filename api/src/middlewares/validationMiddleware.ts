import { Response, Request, NextFunction } from "express";
import {
  body,
  CustomValidator,
  param,
  validationResult,
} from "express-validator";
import User from "../entity/User";

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
  const user = await User.findOne({ where: { email } });
  if (user) throw new Error("Email is already in use");
  return true;
};

// Below are the functions used to wrap and standardize express-validator
// validations/sanitizers

export const checkEmail = body("email")
  .trim()
  .normalizeEmail({ all_lowercase: false })
  .isEmail()
  .withMessage("Email is invalid")
  .isLength({ max: 255 })
  .withMessage("Email is too long")
  .custom(isEmailUnique);

export const checkPassword = body("password")
  .trim()
  .isLength({ min: 6, max: 30 })
  .withMessage("Password must be bewteen 6 and 30 characters long");

export const checkNoteId = param("id")
  .trim()
  .isUUID()
  .withMessage("ID is invalid");

export const checkNoteTitle = body("title")
  .exists()
  .withMessage("'Body' parameter must be supplied");

export const checkNoteContents = body("contents")
  .exists()
  .withMessage("'Contents' parameter must be supplied");
