import React from 'react';
import { PostListDiv, PostItem } from '../../styles/postList_css';

function PostList({ postList }) {
  return (
    <PostListDiv>
      {postList.map((post, idx) => {
        return (
          <PostItem key={idx}>
            <h2 className="title">{post.title}</h2>
            <p className="content">{post.content}</p>
          </PostItem>
        );
      })}
    </PostListDiv>
  );
}

export default PostList;
