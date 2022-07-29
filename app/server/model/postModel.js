const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    replyNum: {
      type: Number,
      default: 0,
    },
  },
  { Collation: 'posts' }
);

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
