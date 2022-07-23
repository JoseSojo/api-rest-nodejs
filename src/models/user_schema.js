const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcryptjs = require('bcryptjs');

const User = new Schema({
  username: {type: String, require: true},
  password: {type: String, require: true},
  email: {type: String, require: true}
});

User.methods.encryptPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);
  return hash;
};

User.methods.matchPassword = async function (password, passwordParam) {
  return await bcryptjs.compare(password, passwordParam)
};


module.exports = mongoose.model('User', User);
