const mongoose = require('mongoose');
const { Schema } = mongoose;

const Note = new Schema({
  title: {type: String, require: true},
  description: {type: String, require: true}
});

module.exports = mongoose.model('Note', Note);
