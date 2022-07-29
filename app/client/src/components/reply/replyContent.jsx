import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReplyContentDiv, EditReplyForm } from '../../styles/replyArea_css';
import moment from 'moment';
import 'moment/locale/ko';

function ReplyContent({ reply }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editReply, setEditReply] = useState(false);
  const [currentReply, setCurrentReply] = useState(reply.reply);
  const modalRef = useRef();
  const user = useSelector((state) => state.user);

  useOnClickOutside(modalRef, () => setOpenEditModal(false));

  // 업로드 & 업데이트 time
  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('LLL') + ' (수정됨)';
    } else {
      return moment(a).format('LLL');
    }
  };

  // 댓글 삭제
  const deleteReply = (e) => {
    e.preventDefault();

    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      let body = {
        postId: reply.postId,
        replyId: reply._id,
      };

      axios
        .post('/api/reply/delete', body)
        .then((response) => {
          if (response.data.success) {
            alert('댓글이 삭제되었습니다.');
          } else {
            alert('❗️ 댓글 삭제에 실패하였습니다.');
          }

          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // 댓글 수정
  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      uid: user.uid,
      reply: currentReply,
      postId: reply.postId,
      replyId: reply._id,
    };

    axios
      .post('/api/reply/edit', body)
      .then((response) => {
        if (response.data.success) {
          alert('댓글 수정이 완료되었습니다.');
        } else {
          alert('❗️ 댓글 수정에 실패하였습니다.');
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ReplyContentDiv>
      <header className="header">
        <div className="userInfo">
          <div className="avatar">
            <img src={reply.author.photoURL} alt="profile" />
          </div>

          <p className="name">{reply.author.displayName}</p>
        </div>

        {user.accessToken && (
          <div className="editMenu">
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
                    setEditReply(true);
                    setOpenEditModal(false);
                  }}
                >
                  수정
                </button>

                <button className="delete" onClick={deleteReply}>
                  삭제
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {editReply ? (
        <EditReplyForm>
          <input
            type="text"
            value={currentReply}
            onChange={(e) => {
              setCurrentReply(e.currentTarget.value);
            }}
          />

          <div className="buttonDiv">
            <button className="cancel" onClick={() => setOpenEditModal(false)}>
              취소
            </button>

            <button onClick={onSubmit}>등록</button>
          </div>
        </EditReplyForm>
      ) : (
        <div className="content">
          <p className="reply">{reply.reply}</p>
          <p className="time">{setTime(reply.createdAt, reply.updatedAt)}</p>
        </div>
      )}
    </ReplyContentDiv>
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

export default ReplyContent;
