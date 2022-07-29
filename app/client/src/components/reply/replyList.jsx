import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReplyContent from './replyContent';

function ReplyList({ postId }) {
  const [replyList, setReplyList] = useState([]);

  // 댓글 리스트
  useEffect(() => {
    let body = {
      postId,
    };
    axios
      .post('/api/reply/list', body)
      .then((response) => {
        if (response.data.success) {
          setReplyList([...response.data.replyList]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <div>
      {replyList.map((reply, idx) => {
        return <ReplyContent key={idx} reply={reply} />;
      })}
    </div>
  );
}

export default ReplyList;
