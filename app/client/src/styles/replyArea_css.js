import styled from '@emotion/styled';

const ReplyAreaDiv = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;
  margin-top: 3.5rem;
`;

const UploadReplyDiv = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;

  .uploadForm {
    width: 100%;
    display: flex;

    input {
      flex-grow: 1;
      padding: 0.7rem 1rem;
      border: 0;
      background-color: #ececec;
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

const ReplyContentDiv = styled.div`
  padding: 1.5rem 1rem 0 1rem;
  margin-top: 1.5rem;
  border-top: 1px solid #dddddd;

  &:last-child {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dddddd;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .userInfo {
      display: flex;
      align-items: center;
    }

    .avatar {
      width: 35px;
      height: 35px;
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
      font-weight: 600;
      color: #363636;
    }

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
`;

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
    button {
      padding: 0.6rem;
      font-size: 0.85rem;
      border-radius: 0.5rem;
      color: #ffffff;
      font-weight: 600;
      background-color: #2fa4ff;
      transition: opacity 200ms ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }

    .cancel {
      background-color: #112b3c;
      margin-right: 0.5rem;
    }
  }
`;

export { ReplyAreaDiv, UploadReplyDiv, ReplyContentDiv, EditReplyForm };
