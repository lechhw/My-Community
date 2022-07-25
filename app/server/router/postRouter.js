const express = require('express');
const router = express.Router();

// 데이터 모델
const { Post } = require('../model/postModel');
const { Counter } = require('../model/counterModel');

// post submit
router.post('/submit', (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
  };

  Counter.findOne({ name: 'counter' })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;

      const communityPost = new Post(temp);
      communityPost.save().then(() => {
        Counter.updateOne({ name: 'counter' }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

// post list
router.post('/list', (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

// post detail
router.post('/detail', (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, post: doc });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

// post edit
router.post('/edit', (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
  };
  Post.findOneAndUpdate({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

// post delete
router.post('/delete', (req, res) => {
  Post.deleteOne({ postNum: req.body.postNum })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
