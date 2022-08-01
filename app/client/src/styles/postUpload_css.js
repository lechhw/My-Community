import styled from '@emotion/styled';

const UploadDiv = styled.div`
  font-family: 'Mukta', sans-serif;
  max-width: 62.5rem;
  padding: 3rem 1rem 1rem 1rem;
  margin: 0 auto;

  @media screen and (max-width: 36rem) {
    padding-top: 1.8rem;
  }

  // 업로드 폼
  .uploadForm {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    h2 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #112b3c;
      margin-bottom: 1rem;
    }

    // 제목
    .titleInput {
      padding: 0.6rem 1rem;
      margin-bottom: 1.2rem;
      font-size: 1.1rem;
      color: #112b3c;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;
      outline-color: #2fa4ff;
    }

    // 이미지 업로드
    .imgContainer {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 0.6rem;
      border: 1px solid #c6c6c6;

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

    // 내용
    .content {
      resize: none;
      min-height: 350px;
      padding: 1rem;
      font-size: 1.1rem;
      line-height: 1.6;
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

      // 업로드 & 수정 버튼
      button {
        width: 100%;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-weight: 700;
        color: #ffffff;
        border-radius: 0.6rem;
        background-color: #2fa4ff;
        transition: background-color 200ms ease-in-out;

        &:hover {
          background-color: #47b5ff;
        }
      }

      // 취소 버튼
      .cancel {
        margin-right: 3rem;
        color: white;
        background-color: #112b3c;
        transition: background-color 200ms ease-in-out;

        &:hover {
          background-color: #334257;
        }
      }
    }
  }
`;

// 로딩 스피너
const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
`;

export { UploadDiv, SpinnerDiv };
