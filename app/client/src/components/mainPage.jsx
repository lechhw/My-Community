import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PostList from './post/postList';
import { MainPageDiv } from '../styles/mainPage_css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function MainPage() {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState('최신순');
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  // 게시글 검색
  const onSearch = (e) => {
    e.preventDefault();
    getPostList();
  };

  // 더보기
  const getPostLoadMore = () => {
    let body = {
      sort,
      search,
      skip,
    };

    axios
      .post('/api/post/list', body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...postList, ...response.data.postList]);
          setSkip(skip + response.data.postList.length);

          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 게시글 불러오기
  const getPostList = () => {
    setSkip(0);

    let body = {
      sort,
      search,
      skip: 0,
    };

    axios
      .post('/api/post/list', body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
          setSkip(response.data.postList.length);

          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPostList();
  }, [sort]);

  return (
    <MainPageDiv>
      <div className="searchDiv">
        <form className="searchForm">
          <input
            type="text"
            placeholder="검색"
            value={search}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
          <button onClick={onSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <DropdownButton
          className="shadow-none "
          id="sortBtn"
          variant="white"
          title={sort}
          align="end"
        >
          <Dropdown.Item
            onClick={() => {
              setSort('최신순');
            }}
          >
            최신순
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSort('인기순');
            }}
          >
            인기순
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <PostList postList={postList} />

      {loadMore && (
        <button className="loadMoreBtn" onClick={getPostLoadMore}>
          더보기
        </button>
      )}
    </MainPageDiv>
  );
}

export default MainPage;
