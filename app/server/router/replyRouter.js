const express = require('express');
const router = express.Router();

// import dataModel
const { Post } = require('../model/postModel');
const { User } = require('../model/userModel');
const { Reply } = require('../model/replyModel');

// 댓글 업로드
router.post('/submit', (req, res) => {
  let temp = {
    reply: req.body.reply,
    postId: req.body.postId,
  };
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userData) => {
      temp.author = userData;

      const newReply = new Reply(temp);
      newReply.save().then(() => {
        Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $inc: { replyNum: 1 } }
        )
          .exec()
          .then(() => {
            res.status(200).json({ success: true });
          });
      });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

// 댓글 불러오기
router.post('/list', (req, res) => {
  Reply.find({ postId: req.body.postId })
    .populate('author')
    .exec()
    .then((replyData) => {
      res.status(200).json({ success: true, replyList: replyData });
    })
    .catch((error) => res.status(400).json({ success: false }));
});

// 댓글 수정
router.post('/edit', (req, res) => {
  let temp = {
    uid: req.body.uid,
    reply: req.body.reply,
    postId: req.body.postId,
  };

  Reply.findOneAndUpdate({ _id: req.body.replyId }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

// 댓글 삭제
router.post('/delete', (req, res) => {
  Reply.deleteOne({ _id: req.body.replyId })
    .then(() => {
      Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $inc: { replyNum: -1 } }
      )
        .exec()
        .then(() => {
          res.status(200).json({ success: true });
        });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
