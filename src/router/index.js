const express = require('express');
const router = express.Router();
const Note = require('../models/note_schema.js');

router.get('/', function(req,res){
  res.render('index.hbs');
});

// obtener note
router.get('/note', async function(req,res){
  const notes = await Note.find();
  res.render('note/note.hbs', {notes});
});

// create note
router.post('/note/create', async function(req,res){
  const { title, description } = req.body;
  const NewNote = await new Note({title, description});
  await NewNote.save();
  res.redirect('/note');
});

// update note
router.get('/note/update/:id', function(req,res){
  const update = Note.findById(id).lean();
  res.redirect('/note', {update});
});

module.exports = router;
