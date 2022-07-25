import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { PostDetailDiv, Post, SpinnerDiv } from '../../styles/postDetail_css';
import { Spinner } from 'react-bootstrap';

function PostDetail() {
  const [postInfo, setPostInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const modalRef = useRef();
  let navigate = useNavigate();

  useOnClickOutside(modalRef, () => setOpenEditModal(false));

  const deletePost = (e) => {
    e.preventDefault();
    if (window.confirm('정말 삭제하시겠습니까?')) {
      let body = {
        postNum: params.postNum,
      };

      axios
        .post('/api/post/delete', body)
        .then((response) => {
          if (response.data.success) {
            alert('게시글이 삭제 되었습니다.');
            navigate('/');
          } else {
            alert('게시글 삭제에 실패하였습니다.');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return;
    }
  };

  // post 불러오기
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

  return (
    <PostDetailDiv>
      {loading ? (
        <Post>
          <header className="header">
            <p>{postInfo.title}</p>

            <div className="editGroup">
              <button
                className="editBtn"
                onClick={() => {
                  setOpenEditModal(true);
                }}
              >
                <i className="fa-solid fa-ellipsis"></i>
              </button>

              {openEditModal && (
                <div ref={modalRef} className="editModal">
                  <button
                    onClick={() => {
                      navigate(`/post/edit/${postInfo.postNum}`);
                    }}
                  >
                    수정
                  </button>
                  <button className="delete" onClick={deletePost}>
                    삭제
                  </button>
                </div>
              )}
            </div>
          </header>
          <div className="content">
            <p>{postInfo.content}</p>
          </div>
        </Post>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" variant="info" />
        </SpinnerDiv>
      )}
    </PostDetailDiv>
  );
}

// useOnClickOutside Hook : 지정된 요소의 외부 클릭 감지
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default PostDetail;
