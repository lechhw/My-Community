import styled from '@emotion/styled';

const MainPageDiv = styled.div`
  font-family: 'Mukta', sans-serif;
  max-width: 62.5rem;
  padding: 2.5rem 1rem;
  margin: 0 auto;

  .searchDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .searchForm {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    margin-right: 1rem;
    border-radius: 0.4rem;
    overflow: hidden;

    input {
      padding: 0.3rem 1rem;
      border: 0;
      border: 1px solid #dddddd;
      border-right: 0;
      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;
      flex-basis: 100%;
      font-size: 1rem;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0 1rem;
      background-color: #2fa4ff;
      color: #ffffff;
      border-left: 1px solid #dddddd;
      transition: background-color 200ms ease-in-out;

      &:hover {
        background-color: #47b5ff;
      }
    }
  }

  #sortBtn {
    border-color: #c6c6c6;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .loadMoreBtn {
    display: block;
    padding: 0.5rem 0.8rem;
    margin: 0 auto;
    margin-top: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #2fa4ff;
    border-radius: 0.4rem;
    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #47b5ff;
    }
  }
`;

export { MainPageDiv };
