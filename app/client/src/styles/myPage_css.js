import styled from '@emotion/styled';

const MyPageDiv = styled.form`
  font-family: 'Mukta', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 62.5rem;
  padding: 4rem 1rem;
  margin: 0 auto;

  @media screen and (max-width: 36rem) {
    padding-top: 2rem;
  }

  // 프로필 이미지
  .profileImgDiv {
    display: flex;
    justify-content: center;
    margin-bottom: 3.5rem;

    @media screen and (max-width: 36rem) {
      margin-bottom: 1.8rem;
    }

    .fileInput {
      display: none;
    }

    .image {
      width: 12.5rem;
      height: 12.5rem;
      margin: 0 auto;
      border-radius: 50%;
      border: 1px solid #dddddd;
      overflow: hidden;

      @media screen and (max-width: 36rem) {
        width: 11.8rem;
        height: 11.8rem;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }

  // 닉네임
  .profileNameDiv {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin-bottom: 2.6rem;

    @media screen and (max-width: 36rem) {
      margin-bottom: 1.5rem;
    }

    .name {
      font-size: 1.2rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }

    // 닉네임 수정 버튼
    .editBtn {
      position: relative;
      top: -0.08rem;
      font-size: 1.1rem;
      color: #112b3c;
      transition: color 200ms ease-in-out;

      &:hover {
        color: #2fa4ff;
      }
    }
  }

  // 닉네임 수정 폼
  .editNameDiv {
    width: 100%;
    max-width: 25rem;

    .nameLabel {
      padding-left: 0.2rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: #666666;
    }

    .editForm {
      display: flex;
      flex-direction: column;

      .input {
        padding: 0.6rem 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        border-radius: 0.8rem;
        border: 1px solid #dddddd;
        outline-color: #2fa4ff;
      }

      // 닉네임 중복검사 메세지
      .checkInfo {
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 500;
      }

      // 닉네임 중복검사 버튼
      .checkBtn {
        padding: 1rem 0;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        background-color: #112b3c;
        border-radius: 0.6rem;
        transition: background-color 200ms ease-in-out;

        @media screen and (max-width: 36rem) {
          margin-bottom: 0.5rem;
        }

        &:not(:disabled):hover {
          background-color: #334257;
        }

        &:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      }

      // 저장버튼
      .saveBtn {
        width: 100%;
        max-width: 25rem;
        margin: 0 auto;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: #ffffff;
        background-color: #2fa4ff;
        border-radius: 0.8rem;
        transition: background-color 200ms ease-in-out;

        &:hover {
          background-color: #47b5ff;
        }
      }
    }
  }
`;

export { MyPageDiv };
