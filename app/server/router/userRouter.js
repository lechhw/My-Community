const express = require('express');
const router = express.Router();
const setUpload = require('../util/uploadUtil');

const { User } = require('../model/userModel');
const { Counter } = require('../model/counterModel');

// 유저 데이터 저장
router.post('/register', (req, res) => {
  let temp = {
    displayName: req.body.displayName,
    email: req.body.email,
    uid: req.body.uid,
    photoURL: req.body.photoURL,
  };
  Counter.findOne({ name: 'counter' })
    .exec()
    .then((doc) => {
      temp.userNum = doc.userNum;
      const userData = new User(temp);
      userData.save().then(() => {
        Counter.updateOne({ name: 'counter' }, { $inc: { userNum: 1 } }).then(
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

// 닉네임 중복검사
router.post('/nameCheck', (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .exec()
    .then((doc) => {
      let check = true;
      if (doc) {
        check = false;
      }
      res.status(200).json({ success: true, check });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

// 프로필 이미지 저장
router.post(
  '/profile/image',
  setUpload('my-community/user'),
  (req, res, next) => {
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

// 프로필 업데이트

router.post('/profile/update', (req, res) => {
  let temp = {
    photoURL: req.body.photoURL,
    displayName: req.body.displayName,
  };
  User.updateOne({ uid: req.body.uid }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
