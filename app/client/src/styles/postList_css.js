import styled from '@emotion/styled';

// post list
const PostListDiv = styled.div`
  font-family: 'Mukta', sans-serif;
  max-width: 62.5rem;
  margin: 0 auto;
`;

// post item
const PostItem = styled.div`
  margin-top: 1.5rem;
  border-radius: 0.3rem;
  border: 1px solid #dddddd;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  // post header
  .header {
    width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid #dddddd;

    // 게시글 제목
    .title {
      margin-bottom: 0.8rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: #363636;
    }

    // 게시글 정보
    .postInfo {
      display: flex;

      // 프로필 이미지
      .avatar {
        width: 2.3rem;
        height: 2.3rem;
        margin-right: 0.6rem;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        padding-top: 0.3rem;

        // user name
        .name {
          display: block;
          font-size: 0.9rem;
          font-weight: 700;
          color: #343434;
          margin-bottom: 0.4rem;
        }

        // timestamps
        .time {
          font-size: 0.85rem;
          color: #888888;
        }
      }
    }
  }

  // 게시글 내용
  .content {
    padding: 1.5rem;
    font-size: 1rem;
    color: #2d2d2d;

    // 이미지 업로드시
    .imgContainer {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 1rem;

      .imgDiv {
        position: relative;
        width: 20rem;
        height: 14rem;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
    }
  }
`;

export { PostListDiv, PostItem };
