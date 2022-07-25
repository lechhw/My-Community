import React from 'react';
import { Link } from 'react-router-dom';
import { PostListDiv, PostItem } from '../../styles/postList_css';

function PostList({ postList }) {
  return (
    <PostListDiv>
      {postList.map((post, idx) => {
        return (
          <Link key={idx} to={`/post/${post.postNum}`}>
            <PostItem>
              <div className="header">
                <h2 className="title">{post.title}</h2>
              </div>

              <div className="content">
                {post.image && (
                  <div className="imgContainer">
                    <div className="imgDiv">
                      <img src={post.image} alt="" />
                    </div>
                  </div>
                )}

                <p>{post.content}</p>
              </div>
            </PostItem>
          </Link>
        );
      })}
    </PostListDiv>
  );
}

export default PostList;
