import express from "express";
import {
  createNote,
  getAllNotes,
  getNotesById,
  removeNote,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNotesById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", removeNote);

export default router;