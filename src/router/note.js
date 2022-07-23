const express = require('express');
const router = express.Router();
const Note = require('../models/note_schema.js');
const {ON, OFF} = require('../config/help.js');

router.get('/', ON, function(req,res){
  res.render('index.hbs');
});

// obtener note
router.get('/note', ON, async function(req,res){
  const notes = await Note.find({create_by: req.user.id}).lean();
  res.render('note/note.hbs', {notes});
});

// get update
router.get('/note/update/:id', ON, async function(req,res){
  const update = await Note.findById(req.params.id).lean();
  const notes = await Note.find({create_by: req.user.id}).lean();
  res.render('note/note.hbs', {notes, update});
});

router.get('/note/delete/:id', ON, async function(req,res){
  const update = await Note.findByIdAndDelete(req.params.id);
  res.redirect('/note');
});

// create note
router.post('/note/create', ON, async function(req,res){
  const { title, description } = req.body;
  const NewNote = await new Note({title, description});
  NewNote.create_by = req.user.id
  await NewNote.save();
  res.redirect('/note');
});

// update note
router.post('/note/update/:id', ON, async function(req, res){
  console.log(req.params.id);
  console.log(req.body);
  const {title,description} = req.body
  const Update = {title,description};
  await Note.findByIdAndUpdate(req.params.id, Update);
  res.redirect('/note');
});

module.exports = router;
