import styled from '@emotion/styled';

const PostListDiv = styled.div`
  max-width: 62.5rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

const PostItem = styled.div`
  margin-top: 1.5rem;
  border-radius: 0.3rem;
  border: 1px solid #dddddd;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .header {
    width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid #dddddd;

    .title {
      margin-bottom: 0.8rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #363636;
    }

    .postInfo {
      display: flex;

      .avatar {
        width: 40px;
        height: 40px;
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

      .record {
        padding-top: 0.5rem;

        .name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #363636;
        }
      }
    }
  }

  .content {
    padding: 1.5rem;
    font-size: 1.1rem;
    color: #2d2d2d;

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
