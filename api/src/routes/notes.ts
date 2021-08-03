import express, { Router } from "express";
import { Types, ObjectId } from "mongoose";

import { isLoggedIn } from "../middlewares/authMiddleware";
import Note from "../models/Note";

const notes = express.Router();

notes
  .get("/", isLoggedIn, async (req, res) => {
    const notes = await Note.find({ userId: req.user!.id });
    res.send(notes);
  })
  .get("/create", async (req, res) => {
    console.log("creating note");
    const newNote = await Note.create({
      title: "asdasd",
      contents: "asdasd",
      userId: "61098ea4a0275522602218a7",
    });
  });

export default notes;
