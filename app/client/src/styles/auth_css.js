import styled from '@emotion/styled';

// 로그인
const LoginDiv = styled.div`
  width: 90%;
  max-width: 22rem;
  padding: 1rem 0;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 0.6rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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

    // email
    input {
      padding: 0.6rem;
      margin-bottom: 0.6rem;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;
      outline-color: #2fa4ff;
    }

    // 버튼 공통 css
    button {
      padding: 0.8rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 0.6rem;
    }

    // 로그인 버튼
    .login {
      margin: 0.4rem 0;
      color: white;
      background-color: #2fa4ff;
      transition: background-color 200ms ease-in-out;

      &:hover {
        background-color: #47b5ff;
      }
    }

    // 회원가입 버튼
    .register {
      color: white;
      background-color: #112b3c;
      transition: background-color 200ms ease-in-out;

      &:hover {
        background-color: #334257;
      }
    }

    // 에러 메세지
    .errorMsg {
      margin-bottom: 0.3rem;
      text-align: center;
    }
  }
`;

// 회원가입
const RegisterDiv = styled.div`
  width: 90%;
  max-width: 22rem;
  margin: 0 auto;
  padding: 1rem 0;
  margin-top: 5rem;
  border-radius: 0.6rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 36rem) {
    margin-top: 3rem;
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

    // 이메일 & 닉네임
    input {
      padding: 0.6rem;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;
      outline-color: #112b3c;
      margin-bottom: 0.6rem;
    }

    // 닉네임 중복검사 버튼
    .nameCheckBtn {
      padding: 0.8rem;
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
      background-color: #2fa4ff;
      border-radius: 0.6rem;
      margin-bottom: 0.6rem;
      transition: background-color 200ms ease-in-out;

      &:not(:disabled):hover {
        background-color: #47b5ff;
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    // 닉네임 중복검사 메세지
    .nameInfo {
      text-align: center;
      margin-bottom: 0.3rem;
    }

    // 에러 메세지
    .errorMsg {
      text-align: center;
      margin-bottom: 0.3rem;
    }

    // 회원가입 버튼
    .registerBtn {
      padding: 0.8rem;
      margin-top: 0.4rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 0.6rem;
      color: white;
      background-color: #112b3c;
      transition: background-color 200ms ease-in-out;

      &:not(:disabled):hover {
        background-color: #334257;
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`;

export { LoginDiv, RegisterDiv };
