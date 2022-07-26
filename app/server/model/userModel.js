const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    displayName: String,
    email: String,
    uid: String,
    userNum: Number,
  },
  { Collation: 'users' }
);

const User = mongoose.model('User', userSchema);

module.exports = { User };
