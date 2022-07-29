import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UploadReplyDiv } from '../../styles/replyArea_css';

function UploadReply({ postId }) {
  const [reply, setReply] = useState('');
  const user = useSelector((state) => state.user);

  // 댓글 작성
  const onSubmit = (e) => {
    e.preventDefault();

    if (!reply) {
      return alert('댓글을 작성해주세요.');
    }

    let body = {
      reply,
      postId,
      uid: user.uid,
    };

    axios.post('/api/reply/submit', body).then((response) => {
      if (response.data.success) {
        alert('댓글 작성이 완료되었습니다.');
        window.location.reload();
      } else {
        alert('❗️ 댓글 작성에 실패하였습니다.');
      }
    });
  };

  return (
    <UploadReplyDiv>
      <form className="uploadForm">
        <input
          type="text"
          placeholder="댓글을 작성해주세요."
          value={reply}
          onChange={(e) => {
            setReply(e.currentTarget.value);
          }}
        />
        <button className="uploadBtn" onClick={onSubmit}>
          등록
        </button>
      </form>
    </UploadReplyDiv>
  );
}

export default UploadReply;
