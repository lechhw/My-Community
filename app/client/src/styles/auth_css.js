import styled from '@emotion/styled';

// login form css
const LoginDiv = styled.div`
  max-width: 22rem;
  padding: 1rem 0;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 0.6rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 48rem) {
    width: 90%;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem;
    margin: 0 auto;

    h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #112b3c;
      text-align: center;
    }

    input {
      padding: 0.6rem;
      margin-bottom: 0.6rem;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;
      outline-color: #2fa4ff;
    }

    button {
      padding: 0.8rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 0.6rem;
      transition: opacity 150ms ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }

    .login {
      margin: 0.4rem 0;
      color: white;
      background-color: #2fa4ff;
    }

    .register {
      color: white;
      background-color: #112b3c;
    }

    .errorMsg {
      margin-bottom: 0.3rem;
      text-align: center;
    }
  }
`;

// register form css
const RegisterDiv = styled.div`
  max-width: 22rem;
  margin: 0 auto;
  padding: 1rem 0;
  margin-top: 5rem;
  border-radius: 0.6rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 48rem) {
    width: 90%;
  }

  .registerForm {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #112b3c;
      text-align: center;
      margin-bottom: 1rem;
    }

    input {
      padding: 0.6rem;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;
      outline-color: #112b3c;
      margin-bottom: 0.6rem;
    }

    .nameCheckBtn {
      padding: 0.8rem;
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
      background-color: #2fa4ff;
      border-radius: 0.6rem;
      margin-bottom: 0.6rem;
      transition: opacity 150ms ease-in-out;

      &:hover {
        opacity: 0.7;
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .nameInfo {
      text-align: center;
      margin-bottom: 0.3rem;
    }

    .errorMsg {
      text-align: center;
      margin-bottom: 0.3rem;
    }

    .registerBtn {
      padding: 0.8rem;
      margin-top: 0.4rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 0.6rem;
      color: white;
      background-color: #112b3c;
      transition: opacity 150ms ease-in-out;

      &:hover {
        opacity: 0.7;
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`;

export { LoginDiv, RegisterDiv };
