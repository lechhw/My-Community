import styled from '@emotion/styled';

const UploadDiv = styled.div`
  max-width: 82.5rem;
  margin: 0 auto;
  padding-top: 3rem;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #112b3c;
      margin-bottom: 1rem;
    }

    .title {
      padding: 0.8rem 1rem;
      margin-bottom: 1.2rem;
      font-size: 1.1rem;
      color: #112b3c;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;
      outline-color: #2fa4ff;
    }

    textarea {
      resize: none;
      min-height: 350px;
      padding: 1rem;
      font-size: 1.1rem;
      color: #112b3c;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;
      margin-top: 1.2rem;
      margin-bottom: 1rem;
      outline-color: #2fa4ff;
    }

    .btnDiv {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      button {
        width: 100%;

        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-weight: 700;
        color: #ffffff;
        border-radius: 0.6rem;
        background-color: #2fa4ff;
        transition: background-color 200ms ease-in-out,
          opacity 200ms ease-in-out;

        &:hover {
          background-color: #47b5ff;
        }
      }

      .cancel {
        margin-right: 3rem;
        color: #2fa4ff;
        background-color: #ffffff;
        border: 2px solid #2fa4ff;

        &:hover {
          background-color: #ffffff;
          opacity: 0.7;
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

export { UploadDiv, SpinnerDiv };
