import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getallNotes controller.", error);
        res.status(500).json({ message: "Internal Server error." });
    }
}

export async function getNoteById(req, res) {
    try {
        const { title, content } = req.body;
    } catch (error) {
        console.error("Error in getNoteById controller.", error);
        res.status(500).json({ message: "Internal Server error." });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        const savednote = await note.save();
        res.status(201).json(savednote);
    } catch (error) {
        console.error("Error in createNote controller.", error);
        res.status(500).json({ message: "Internal Server error." });
    }
}

export async function updateNote(req, res) {
    res.status(200).json({ message: "working" });
}

export async function deleteNote(req, res) {
    res.status(200).json({ message: "working" });
}