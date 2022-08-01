import styled from '@emotion/styled';

const HeaderDiv = styled.div`
  font-family: 'Mukta', sans-serif;

  .container {
    max-width: 68rem;
  }

  // logo
  .logoDiv {
    display: flex;
    align-items: center;

    img {
      width: 2.2rem;
      height: auto;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #112b3c;

      @media screen and (max-width: 36rem) {
        font-size: 1.2rem;
      }
    }
  }
`;

// 메뉴 아이콘
const IconDiv = styled.div`
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.2rem;
    color: #112b3c;
    transition: color 250ms ease-in-out;

    &:hover {
      color: #2fa4ff;
    }
  }

  // post upload 버튼
  .is-upload {
    margin-right: 1.6rem;
  }

  // 사용자 버튼
  .userDiv {
    position: relative;

    // 사용자 메뉴 모달
    .userModal {
      position: absolute;
      top: 2rem;
      left: -1.6rem;
      display: flex;
      flex-direction: column;
      width: max-content;
      padding: 0.5rem;
      font-size: 0.95rem;
      background-color: #ffffff;
      border-radius: 0.5rem;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      button {
        padding: 0.6rem;
        font-weight: 600;
        color: #363636;

        &:hover {
          opacity: 0.6;
        }
      }

      .login {
        color: #eb4747;
      }

      .logout {
        color: #eb4747;
      }
    }
  }
`;

export { HeaderDiv, IconDiv };
