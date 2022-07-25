const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const config = require('../config/key');
const access_key = config.access_key;
const secret_key = config.secret_key;

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
