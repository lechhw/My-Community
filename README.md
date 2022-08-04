# My-Community

# Intro

사용자들이 서로 글을 작성하고 공유할 수 있는 커뮤니티 웹 어플리케이션입니다. React를 사용하여 작업하였고, 서버는 node.js + express를 사용하여 구축하였습니다. mongoDB에 데이터를 저장하고 이미지는 네이버 클라우드 플랫폼의 Object storage를 이용하여 외부 플랫폼에 저장 후 가져와서 사용하는 형식으로 작업하였습니다. 그리고 firebase의 Authentication 서비스를 이용하여 로그인과 회원가입 기능을 구현하였고, 로그인한 유저들은 게시글 및 댓글을 작성, 수정, 삭제할 수 있으며 마이페이지에서 유저 프로필 이미지 및 닉네임을 수정할 수 있습니다.

<br>

## Live Demo : [My Community](https://lechhw-my-community.herokuapp.com)

작업기간 (2022.07.22 ~ 2022.08.04)

<br>

# Features

- 메인페이지 (게시글 리스트 검색 및 정렬)
- 로그인 & 회원가입
- 게시글 업로드
- 게시글 상세보기 (게시글 수정 & 삭제) + 댓글
- 마이페이지 (프로필 이미지 & 닉네임 수정)

<br>

# Skills

- [x] React
- [x] React Router
- [x] Redux (Redux-toolkit)
- [x] Firebase (Authentication)
- [x] Emotion
- [x] React Bootstrap
- [x] Node.js + Express
- [x] MongoDB
- [x] Mongoose
- [x] Deploy : heroku

<br>

# Preview

## 메인페이지 (검색 & 정렬)

<img src="https://user-images.githubusercontent.com/99241230/182767814-89dff0f6-2186-4977-91ad-e548c1a6bdb1.gif">

<br>

## 로그인 & 회원가입

<img src="https://user-images.githubusercontent.com/99241230/182778477-d0887915-79c0-4a49-8549-076f666005cf.gif">

<br>

## 게시글 작성

<img src="https://user-images.githubusercontent.com/99241230/182768530-35d9aa9c-58c5-4402-8c1e-8efd40609fa7.gif">

<br>

## 게시글 수정

<img src="https://user-images.githubusercontent.com/99241230/182768876-517b57ed-bfa3-4987-955d-80f8c078a8b4.gif">

<br>

## 댓글 수정

<img src="https://user-images.githubusercontent.com/99241230/182769172-165bc856-9488-49b5-a19a-690ce23ab2ea.gif">

<br>

## 마이페이지 (프로필 이미지 , 닉네임 수정)

<img src="https://user-images.githubusercontent.com/99241230/182769558-0f7cb4a2-2a71-44fc-be6c-d3d37c96ec60.gif">

<br>

# Solution

## ✅ Server

node.js + express 를 이용하여 서버를 구축하였고, mongoDB 를 이용하여 데이터 저장을 하였습니다. 그리고 node.js 와 mongoDB 연결을 위해 ODM(Object Data Mapping) library 인 mongoose 를 이용하여 작업하였습니다.

```js
// index.js

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
```

<br>

mongoose 의 Schema 를 사용하여 데이터별로 모델 파일을 만들어 데이터 구조 및 타입을 정의하였고 router 파일에서 import 하여 사용하는 식으로 진행 하였습니다.

```js
// postModel.js

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
  { Collation: 'posts', timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
```

<br>

## ✅ Server - image upload

파일 업로드를 위해 node.js 의 미들웨어인 multer 를 이용하였고,
해당 프로젝트는 네이버클라우드 플랫폼의 object storage 를 이용하기 때문에 multer-s3 사용하여 연결 해주는 작업을 진행하였습니다.

```js
// uploadUtil.js

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const config = require('../config/key');
const access_key = config.access_key;
const secret_key = config.secret_key;

// S3 셋팅 : 네이버 클라우드 플랫폼
const S3 = new AWS.S3({
  endpoint,
  region,
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
});

function setUpload(bucket) {
  const upload = multer({
    storage: multerS3({
      s3: S3,
      bucket: bucket, // 파일 저장 경로
      acl: 'public-read-write', // 보안규칙 : 아무나 읽고 수정 가능

      // 고유의 key 설정
      key: function (req, file, cb) {
        // path.extname : 파일명에서 확장자만 제거해주고 온전한 파일명만 반환
        let fileName = path.extname(file.originalname);

        cb(null, Date.now().toString() + fileName);
      },
    }),
  }).single('file');
  return upload;
}

module.exports = setUpload;
```

<br>

## ✅ Client - Redux-toolkit (상태관리)

유저의 정보를 전역적으로 관리하기 위하여 Redux-toolkit 을 이용하였습니다. Redux-toolkit 의 createSlice 를 사용하여 간편하게 리듀서를 만들고 스토어에 저장하여 사용하였습니다.

```js
// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    displayName: '',
    uid: '',
    accessToken: '',
    photoURL: '',
    isLoading: false,
  },

  reducers: {
    loginUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.photoURL = action.payload.photoURL;
      state.isLoading = true;
    },

    clearUser: (state) => {
      state.displayName = '';
      state.uid = '';
      state.accessToken = '';
      state.isLoading = true;
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
```

```js
// store.js

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
  },

  // 비직렬화한 데이터 전송으로 인해 발생되는 에러메세지 감추기
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
```
