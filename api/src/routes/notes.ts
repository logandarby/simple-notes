import express, { Request, Router } from "express";

import { isLoggedIn } from "../middlewares/authMiddleware";
import {
  checkNoteId,
  validateRequest,
} from "../middlewares/validationMiddleware";
import Note from "../entity/Note";

const notes = express.Router();

/**
 * Parses an Express request body to extract the note info safely.
 * @param requestBody The Express request body
 * @returns The note info extracted from the request body
 */
const parseNoteInfo = (requestBody: Request["body"]) => {
  return {
    title: requestBody.title,
    contents: requestBody.contents,
  };
};

notes.use(isLoggedIn);

notes
  .route("/")
  .get(async (req, res) => {
    const notes = await Note.find({ where: { user: req.user!.id } });
    res.send(notes);
  })
  .post(async (req, res) => {
    // const user = await User.findOne({ where: { id: req.user!.id } });
    const result = await Note.insert({
      ...parseNoteInfo(req.body),
      user: { id: req.user!.id },
    });
    res.send({
      ...parseNoteInfo(req.body),
      id: result.identifiers[0].id,
    });
  });

notes.use("/:id", checkNoteId, validateRequest);

notes
  .route("/:id")
  .get(async (req, res) => {
    const note = await Note.findOne({
      where: { id: req.params.id, user: req.user!.id },
    });
    if (!note) return res.sendStatus(404);
    res.send(note);
  })
  .patch(async (req, res) => {
    const result = await Note.update(
      { id: req.params.id, user: { id: req.user!.id } },
      { ...parseNoteInfo(req.body) }
    );
    if (result.affected === 0) return res.sendStatus(404);
    res.sendStatus(200);
  })
  .delete(async (req, res) => {
    const result = await Note.delete({
      id: req.params.id,
      user: { id: req.user!.id },
    });
    if (result.affected === 0) return res.sendStatus(404);
    res.sendStatus(200);
  });

export default notes;
