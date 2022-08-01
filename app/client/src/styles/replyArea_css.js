import styled from '@emotion/styled';

const ReplyAreaDiv = styled.div`
  font-family: 'Mukta', sans-serif;
  max-width: 62.5rem;
  margin: 0 auto;
  margin-top: 3.5rem;
`;

// 댓글 작성 폼
const UploadReplyDiv = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;

  .uploadForm {
    width: 100%;
    display: flex;

    input {
      flex-grow: 1;
      font-size: 1rem;
      padding: 0.6rem 1rem;
      border: 0;
      background-color: #f0f0f0;
      outline: none;
    }

    .uploadBtn {
      flex-grow: 0;
      flex-shrink: 0;
      padding: 0.6rem 1.5rem;
      font-weight: 600;
      color: #ffffff;
      background-color: #2fa4ff;
      transition: opacity 200ms ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

// 댓글
const ReplyContentDiv = styled.div`
  padding: 1.5rem 1rem 0 1rem;
  margin-top: 1.5rem;
  border-top: 1px solid #dddddd;

  &:last-child {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dddddd;
  }

  // 댓글 header
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;

    // 게시글 작성자 정보
    .userInfo {
      display: flex;
      align-items: center;

      .avatar {
        width: 2rem;
        height: 2rem;
        margin-right: 0.6rem;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .name {
        font-size: 0.9rem;
        font-weight: 700;
        color: #343434;
      }
    }

    // 댓글 수정 버튼 & 모달
    .editMenu {
      position: relative;

      .editBtn {
        color: #112b3c;
        transition: color 250ms ease-in-out;

        &:hover {
          color: #2fa4ff;
        }
      }

      .editModal {
        position: absolute;
        left: -1.5rem;
        top: 2rem;
        display: flex;
        flex-direction: column;
        width: max-content;
        background-color: #ffffff;
        border-radius: 0.6rem;
        padding: 0.3rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        button {
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.6rem 1.5rem;

          &:hover {
            opacity: 0.6;
          }
        }

        .delete {
          color: #eb4747;
        }
      }
    }
  }

  // 댓글 content
  .content {
    padding-left: 0.2rem;

    .reply {
      font-size: 1rem;
      margin-bottom: 1.2rem;
    }

    // timestamps
    .time {
      font-size: 0.8rem;
      color: #888888;
    }
  }
`;

// 댓글 수정 폼
const EditReplyForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 0;
    background-color: #ececec;
    outline: none;
    border-radius: 0.4rem;
    margin-bottom: 0.8rem;
  }

  .buttonDiv {
    // 등록 버튼
    button {
      padding: 0.6rem;
      font-size: 0.85rem;
      border-radius: 0.5rem;
      color: #ffffff;
      font-weight: 600;
      background-color: #2fa4ff;
      transition: background-color 200ms ease-in-out;

      &:hover {
        background-color: #47b5ff;
      }
    }

    // 취소버튼
    .cancel {
      margin-right: 0.5rem;
      background-color: #112b3c;
      transition: background-color 200ms ease-in-out;

      &:hover {
        background-color: #334257;
      }
    }
  }
`;

export { ReplyAreaDiv, UploadReplyDiv, ReplyContentDiv, EditReplyForm };
