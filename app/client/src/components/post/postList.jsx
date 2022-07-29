import React from 'react';
import { Link } from 'react-router-dom';
import { PostListDiv, PostItem } from '../../styles/postList_css';
import moment from 'moment';
import 'moment/locale/ko';

function PostList({ postList }) {
  // 업로드 & 업데이트 time
  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('LLL') + ' (수정됨)';
    } else {
      return moment(a).format('LLL');
    }
  };

  return (
    <PostListDiv>
      {postList.map((post, idx) => {
        return (
          <Link key={idx} to={`/post/${post.postNum}`}>
            <PostItem>
              <header className="header">
                <h2 className="title">{post.title}</h2>

                <div className="postInfo">
                  <div className="avatar">
                    <img src={post.author.photoURL} alt="avatar" />
                  </div>

                  <div className="record">
                    <strong className="name">{post.author.displayName}</strong>

                    <p className="time">
                      {setTime(post.createdAt, post.updatedAt)}
                    </p>
                  </div>
                </div>
              </header>

              <div className="content">
                {post.image && (
                  <div className="imgContainer">
                    <div className="imgDiv">
                      <img src={post.image} alt="post" />
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
