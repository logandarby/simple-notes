import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";

/**
 * A middleware that validates any express-validator validations/sanitizers.
 * Returns code 400 with the errors array if the request is invalid.
 */

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
