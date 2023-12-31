//Load env Variables
require('dotenv').config();

// Import Dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesController');

//create an express app
const app = express()

//Configure express app
app.use(express.json());
app.use(cors());

//connect to database
connectToDb();

//routing
app.get('/notes', notesController.fetchNotes);

app.get('/notes/:id', notesController.fetchNoteById);

app.post('/notes', notesController.createNote);

app.put('/notes/:id', notesController.updateNote);

app.delete('/notes/:id', notesController.deleteNote);

//start our server
app.listen(process.env.PORT);