import styled from '@emotion/styled';

const PostDetailDiv = styled.div`
  max-width: 82.5rem;
  margin: 0 auto;
  padding: 3rem 0;
`;

const Post = styled.div`
  width: 80%;
  min-height: 300px;
  margin: 0 auto;
  border-radius: 0.6rem;
  border: 1px solid #c6c6c6;

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 2.5rem 1.5rem;
    border-bottom: 1px solid #c6c6c6;

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
    font-size: 1.1rem;
    padding: 1.5rem;
  }
`;

const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
`;

export { PostDetailDiv, Post, SpinnerDiv };
