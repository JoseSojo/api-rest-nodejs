const mongoose = require('mongoose');
const { Schema } = mongoose;

const Note = new Schema({
  note_title: {type: String, require: true},
  note_description: {type: String, require: true}
});

module.exports = mongoose.model('Note', Note);
