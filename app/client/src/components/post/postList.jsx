import React from 'react';
import { Link } from 'react-router-dom';
import { PostListDiv, PostItem } from '../../styles/postList_css';

function PostList({ postList }) {
  return (
    <PostListDiv>
      {postList.map((post, idx) => {
        return (
          <PostItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <h2 className="title">{post.title}</h2>
              <p className="content">{post.content}</p>
            </Link>
          </PostItem>
        );
      })}
    </PostListDiv>
  );
}

export default PostList;
