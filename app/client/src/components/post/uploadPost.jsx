import React, { useEffect, useState } from 'react';
import { UploadDiv } from '../../styles/postUpload_css';
import ImageUploader from './imageUploader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UploadPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  // 포스트 업로드
  const onSubmit = (e) => {
    e.preventDefault();

    if (title === '' || content === '') {
      return alert('❗️ 모든 항목을 작성해 주세요.');
    }

    let body = {
      title,
      content,
      image,
      uid: user.uid,
    };

    axios.post('/api/post/submit', body).then((response) => {
      if (response.data.success) {
        alert('게시글 작성이 완료되었습니다.');
        navigate('/');
      } else {
        alert('❗️ 게시글 작성에 실패하였습니다.');
      }
    });
  };

  // 로그인 체크
  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      // user.isLoading : 새로고침시 useData 의 값이 사라짐으로 인해 로그인 페이지로 가는 것을 방지
      alert('❗️ 로그인한 회원만 글 작성이 가능합니다.');
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <UploadDiv>
      <form className="uploadForm">
        <h2>게시글 작성</h2>
        <input
          className="titleInput"
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />

        <ImageUploader setImage={setImage} />

        {image && (
          <div className="imgContainer">
            <div className="imgDiv">
              <img src={image} alt="post" />
            </div>
          </div>
        )}

        <textarea
          className="content"
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        ></textarea>

        <div className="btnDiv">
          <button onClick={onSubmit}>업로드</button>
        </div>
      </form>
    </UploadDiv>
  );
}

export default UploadPost;
