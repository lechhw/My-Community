import styled from '@emotion/styled';

const PostListDiv = styled.div`
  max-width: 82.5rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

const PostItem = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 1.5rem;
  border-radius: 0.4rem;
  border: 1px solid #ececec;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.4rem;
  }

  .content {
    font-size: 1.1rem;
  }
`;

export { PostListDiv, PostItem };
