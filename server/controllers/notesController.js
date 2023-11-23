const Note = require('../models/note');

const fetchNotes = async (req,res) => {
    //Find the notes
    const notes = await Note.find();
    //respond with them
    res.json({notes: notes});
};

const fetchNoteById = async(req,res) => {
    //Get id off the url
    const noteId = req.params.id;

    //Find the note using that id
    const note = await Note.findById(noteId);

    //respond with that note
    res.json({note: note});
};

const createNote = async(req, res) => {
    //Get the sent in data off the req body
    const title = req.body.title;
    const body = req.body.body;

    //Create a note with it
    const note = await Note.create({
        title: title,
        body: body,
    });

    //response with a new note
    res.json({note: note});
};

const updateNote = async(req,res) => {
    //Get the id off the url
    const noteId = req.params.id;

    //Get the data off the req body
    const title = req.body.title;
    const body = req.body.body;

    //Find and update the url
        await Note.findByIdAndUpdate(noteId, {
        title: title,
        body: body,
    });

    //Find updated note
    const note = await Note.findById(noteId);

    //Respond with it
    res.json({note: note});
};

const deleteNote = async(req,res) => {
    //get the id off the url
    const noteId = req.params.id;

    //delete the record
    await Note.deleteOne({_id: noteId});

    // respond
    res.json({success: "Record Deleted"});
};

module.exports = {
    fetchNotes: fetchNotes,
    fetchNoteById: fetchNoteById,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote
}