import styled from '@emotion/styled';

const PostDetailDiv = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Post = styled.div`
  border-radius: 0.2rem;
  border: 1px solid #dddddd;

  .header {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid #dddddd;

    .postInfoDiv {
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
            font-weight: 600;
            font-size: 0.95rem;
            color: #363636;
          }
        }
      }
    }

    .editGroup {
      position: relative;

      .editBtn {
        color: #112b3c;
        transition: color 250ms ease-in-out;

        &:hover {
          color: #2fa4ff;
        }
      }

      .editModal {
        position: absolute;
        left: -1.5rem;
        top: 2rem;
        display: flex;
        flex-direction: column;
        width: max-content;
        background-color: #ffffff;
        border-radius: 0.6rem;
        padding: 0.3rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        button {
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.6rem 1.5rem;

          &:hover {
            opacity: 0.6;
          }
        }

        .delete {
          color: #eb4747;
        }
      }
    }
  }

  .content {
    padding: 2rem 1.5rem;
    font-size: 1.1rem;
    color: #2d2d2d;

    .imgContainer {
      width: 100%;
      display: flex;
      justify-content: center;

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

const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
`;

export { PostDetailDiv, Post, SpinnerDiv };
