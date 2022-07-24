import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PostList from './post/postList';

function MainPage() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post('/api/post/list')
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PostList postList={postList} />
    </div>
  );
}

export default MainPage;
