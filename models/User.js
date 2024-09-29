const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pastExperience: { type: String, default: '' },
  skillSets: { type: String, default: '' },
  education: { type: String, default: '' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
