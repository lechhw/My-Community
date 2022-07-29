import React from 'react';
import { useSelector } from 'react-redux';
import ReplyList from './replyList';
import UploadReply from './uploadReply';
import { ReplyAreaDiv } from '../../styles/replyArea_css';

function ReplyArea({ postId }) {
  const user = useSelector((state) => state.user);

  return (
    <ReplyAreaDiv>
      {user.accessToken && <UploadReply postId={postId} />}
      <ReplyList postId={postId} />
    </ReplyAreaDiv>
  );
}

export default ReplyArea;
