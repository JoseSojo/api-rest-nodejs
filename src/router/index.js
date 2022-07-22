const express = require('express');
const router = express.Router();
const Note = require('../models/note_schema.js');

router.get('/', function(req,res){
  res.render('index.hbs');
});

// obtener note
router.get('/note', function(req,res){
  const notes = Note.find().lean();
  res.render('note/note.hbs', {notes});
});

// create note
router.post('/note/create', async function(req,res){
  const {note_title, note_description} = req.body;
  const NewNote = await new Note({vnote_title, note_description});
  await NewNote.save();
  res.redirect('/note');
});

// update note
router.get('/note/update/:id', function(req,res){
  const update = Note.findById(id).lean();
  res.redirect('/note', {update});
});

module.exports = router;
