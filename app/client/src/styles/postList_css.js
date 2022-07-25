import styled from '@emotion/styled';

const PostListDiv = styled.div`
  max-width: 82.5rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

const PostItem = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1.5rem;
  border-radius: 0.4rem;
  border: 1px solid #c6c6c6;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .header {
    width: 100%;
    padding: 2rem 1.5rem;
    border-bottom: 1px solid #c6c6c6;

    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  .content {
    padding: 2rem 1.5rem;
    font-size: 1.1rem;

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
