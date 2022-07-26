const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./server/config/key');
const app = express();
const port = process.env.PORT || 3500;

// static 파일 설정
app.use(express.static(path.join(__dirname, './client/build')));

// body 파서 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router 연결
app.use('/api/post', require('./server/router/postRouter'));
app.use('/api/user', require('./server/router/userRouter'));
app.use('/api/reply', require('./server/router/replyRouter'));

// mongoDB 연결
app.listen(port, () => {
  mongoose.connect(config.mongoURI).then(() => {
    console.log(`Example app listening on port ${port}`);
    console.log('Connecting MongoDB...');
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
