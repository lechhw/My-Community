const mongoose = require('mongoose');

const replySchema = new mongoose.Schema(
  {
    reply: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    postId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { Collation: 'replies', timestamps: true }
);

const Reply = mongoose.model('Reply', replySchema);

module.exports = { Reply };
