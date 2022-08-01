import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { UploadDiv, SpinnerDiv } from '../../styles/postUpload_css';
import { Spinner } from 'react-bootstrap';
import ImageUploader from './imageUploader';

function EditPost() {
  const [postInfo, setPostInfo] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  let params = useParams();
  let navigate = useNavigate();

  // 게시글 수정
  const onSubmit = (e) => {
    e.preventDefault();

    if (title === '' || content === '') {
      return alert('모든 항목을 작성해주세요!');
    }

    let body = {
      title,
      content,
      image,
      postNum: params.postNum,
    };

    axios.post('/api/post/edit', body).then((response) => {
      if (response.data.success) {
        alert('글 수정이 완료되었습니다.');
        navigate(`/post/${params.postNum}`);
      } else {
        alert('글 수정에 실패하였습니다.');
      }
    });
  };

  // 게시글 불러오기
  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };

    axios
      .post('/api/post/detail', body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
          setLoading(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  useEffect(() => {
    setTitle(postInfo.title);
    setContent(postInfo.content);
    setImage(postInfo.image);
  }, [postInfo]);

  return (
    <UploadDiv>
      {loading ? (
        <form className="uploadForm">
          <h2>게시글 수정</h2>
          <input
            className="titleInput"
            type="text"
            value={title || ''}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />

          <ImageUploader setImage={setImage} />

          {image && (
            <div className="imgContainer">
              <div className="imgDiv">
                <img src={image} alt="" />
              </div>
            </div>
          )}

          <textarea
            className="content"
            value={content || ''}
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
          ></textarea>

          <div className="btnDiv">
            <button
              className="cancel"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              취소
            </button>
            <button onClick={onSubmit}>수정</button>
          </div>
        </form>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" variant="info" />
        </SpinnerDiv>
      )}
    </UploadDiv>
  );
}

export default EditPost;
