import express, { Router } from "express";

import { isLoggedIn } from "../middlewares/authMiddleware";
import Note from "../models/Note";

const notes = express.Router();

notes.use(isLoggedIn);

notes
  .route("/")
  .get(async (req, res) => {
    console.log("yo");
    const notes = await Note.find({ userId: req.user!.id });
    res.send(notes);
  })
  .post(async (req, res) => {
    const note = await Note.create({
      ...req.body,
      userId: req.user!.id,
    });
    res.send(note);
  });

notes
  .route("/:id")
  .get(async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.send(note);
  })
  .patch(async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, { ...req.body });
    res.send(note);
  })
  .delete(async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  });

export default notes;
