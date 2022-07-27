import styled from '@emotion/styled';

const HeaderDiv = styled.div`
  font-family: 'Mukta', sans-serif;

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

      @media screen and (max-width: 575px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 575px) {
    padding-right: 1.6rem;
  }

  .icon {
    font-size: 1.2rem;
    color: #112b3c;
    transition: color 250ms ease-in-out;

    &:hover {
      color: #2fa4ff;
    }
  }

  .is-upload {
    margin-right: 1.6rem;
  }

  .userDiv {
    position: relative;

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
