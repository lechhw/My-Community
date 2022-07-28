import styled from '@emotion/styled';

const MyPageDiv = styled.form`
  width: 90%;
  max-width: 82.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  // 프로필 이미지
  .avatarDiv {
    display: flex;
    justify-content: center;
    margin-bottom: 3.5rem;

    .fileInput {
      display: none;
    }

    .avatar {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      margin-top: 4rem;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }

  // 닉네임 css
  .nameInfo {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin-bottom: 2.6rem;

    p {
      font-size: 1.2rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }

    .changeBtn {
      position: relative;
      top: -0.08rem;
      font-size: 1.1rem;
      color: #112b3c;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  // 닉네임 변경 양식 css
  .changeNameDiv {
    width: 80%;
    max-width: 25rem;

    .nameLabel {
      padding-left: 0.2rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      color: #666666;
    }

    .nameWrapper {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      .nameInput {
        flex-grow: 1;
        padding: 0.6rem 1rem;
        margin-right: 0.5rem;
        border-radius: 0.8rem;
        border: 1px solid #dddddd;
        outline-color: #2fa4ff;
      }

      .nameCheckBtn {
        flex-grow: 0;
        flex-shrink: 0;
        padding: 0.8rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: #ffffff;
        background-color: #112b3c;
        border-radius: 0.6rem;
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
  }

  // 저장버튼 css
  .saveBtn {
    width: 80%;
    max-width: 25rem;
    margin: 0 auto;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
    background-color: #2fa4ff;
    border-radius: 0.8rem;
    transition: opacity 150ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export { MyPageDiv };
