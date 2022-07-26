import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { PostDetailDiv, Post, SpinnerDiv } from '../../styles/postDetail_css';
import { Spinner } from 'react-bootstrap';
import ReplyArea from '../reply/replyArea';
import moment from 'moment';
import 'moment/locale/ko';
import { useSelector } from 'react-redux';

function PostDetail() {
  const [postInfo, setPostInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const modalRef = useRef();
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useOnClickOutside(modalRef, () => setOpenEditModal(false));

  // 업로드 & 업데이트 time
  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('LLL') + ' (수정됨)';
    } else {
      return moment(a).format('LLL');
    }
  };

  // 게시글 삭제
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
        <>
          <Post>
            <header className="header">
              <div className="postInfoDiv">
                <h2 className="title">{postInfo.title}</h2>

                <div className="postInfo">
                  <div className="avatar">
                    <img src={postInfo.author.photoURL} alt="avatar" />
                  </div>

                  <div className="record">
                    <strong className="name">
                      {postInfo.author.displayName}
                    </strong>

                    <p className="time">
                      {setTime(postInfo.createdAt, postInfo.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* 해당 게시글 작성자만 수정 가능 */}
              {user.uid === postInfo.author.uid && (
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
              )}
            </header>

            <div className="content">
              {postInfo.image && (
                <div className="imgContainer">
                  <div className="imgDiv">
                    <img src={postInfo.image} alt="" />
                  </div>
                </div>
              )}

              <p>{postInfo.content}</p>
            </div>
          </Post>

          <ReplyArea postId={postInfo._id} />
        </>
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
