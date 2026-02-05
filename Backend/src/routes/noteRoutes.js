import express from "express";
import { createNote, getAllNotes, getNoteById } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", getAllNotes);
router.delete("/:id", getAllNotes);

export default router;