import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).send(notes);
  } catch (error) {
    console.error("Error in getNotes controller", error);
    return res.status(501).json({ message: "Internal server error" });
  }
}

export async function getNotesById(req, res) {
  try {
    const noteFound = await Note.findById(req.params.id);
    if (!noteFound) return res.status(404).json({ message: "Note not found" });
    console.log("resultant of findById",noteFound);
    return res.status(200).json(noteFound);
  } catch (error) {
    console.log("Error while finding the note", error);
    return res.status(501).json({ message: "Kuch kharabi aa gai hai" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    return res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error in createNote controller", error);
    return res.status(501).json({ message: "Internal Server Error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if(!updatedNote) return res.status(404).json({message:"Note not found"});
    else console.log("result of findByIdAndUpdate", updatedNote);
    
    return res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updatedNote controller", error);
    return res.status(500).json({ message: "Internal server error occured" });
  }
}

export async function removeNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    console.log("result of findByIdAndDelete",deletedNote);
    if(!deletedNote) {
      return res.status(404).json({ message: "Requested Note not found" });
    }
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNote controller", error);
    return res.status(501).json({
      message: "Internal server error occured while deleting the note",
    });
  }
}
