const express = require('express');
const router = express.Router();
const Note = require('../models/note_schema.js');

router.get('/', function(req,res){
  res.render('index.hbs');
});

// obtener note
router.get('/note', async function(req,res){
  const notes = await Note.find().lean();
  res.render('note/note.hbs', {notes});
});

// get update
router.get('/note/update/:id', async function(req,res){
  const update = await Note.findById(req.params.id).lean();
  const notes = await Note.find().lean();
  res.render('note/note.hbs', {notes, update});
});

router.get('/note/delete/:id', async function(req,res){
  const update = await Note.findByIdAndDelete(req.params.id);
  res.redirect('/note');
});

// create note
router.post('/note/create', async function(req,res){
  const { title, description } = req.body;
  const NewNote = await new Note({title, description});
  await NewNote.save();
  res.redirect('/note');
});

// update note
router.post('/note/update/:id', async function(req, res){
  console.log(req.params.id);
  console.log(req.body);
  const {title,description} = req.body
  const Update = {title,description};
  await Note.findByIdAndUpdate(req.params.id, Update);
  res.redirect('/note');
});

module.exports = router;
