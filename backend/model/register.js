const mongoose = require('mongoose');

const registerschema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  OTP : Number
});

const registerModel = mongoose.model('user', registerschema);

module.exports = registerModel;