import styled from "styled-components";

export const ModalContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;

  .modal-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 346px;
    height: 926px;
    margin-top: 94px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 3px 3px 8px 0px black;

    color: black;

    .modal-box-header {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      gap: 150px;
      margin: 24px;
      font-size: 16px;
      font-family: "Inter", sans-serif;

      .btn-close-modal {
        background-color: #ffffff;
        border: none;
        color: rgba(173, 181, 189, 1);
        font-size: 25px;
      }
    }
  }
  h2 {
    width: 100%;
    height: 24px;
    margin-left: 24px;
    top: 74px;
    margin-bottom: 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: bolder;
    font-size: 14px;
    line-height: 24px;

    color: #000000;
  }
  @media screen and (min-width: 769px) {
    .modal-box {
      width: 520px;
      height: 767px;
      margin-top: 1px;
      .modal-box-header {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        gap: 270px;
        margin: 24px;
        font-size: 16px;
        font-family: "Inter", sans-serif;
        .btn-close-modal {
          background-color: #ffffff;
          border: none;
          color: rgba(173, 181, 189, 1);
          font-size: 25px;
        }
      }
    }
    h2 {
      width: 100%;
      height: 24px;
      margin-left: 24px;
      top: 74px;
      margin-bottom: 24px;
      font-family: "Inter";
      font-style: normal;
      font-weight: bolder;
      font-size: 14px;
      line-height: 24px;
      color: #000000;
    }
  }
`;

export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  label {
    margin-left: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 550;
    font-size: 14px;
    line-height: 17px;
    color: #212529;
  }
  input {
    margin-left: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    width: 300px;
    height: 45px;
    margin-top: 8px;
    margin-bottom: 37px;
    border: 1.5px solid rgba(173, 181, 189, 1);
    border-radius: 4px;
  }
  textarea {
    margin-left: 24px;
    margin-bottom: 15px;
    margin-top: 8px;
    max-width: 300px;
    height: 140px;
    overflow: auto;
    resize: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding: 10px;
    color: #495057;
    border: 1.5px solid rgba(173, 181, 189, 1);
    border-radius: 4px;
  }

  .btns-div {
    display: flex;
    margin-right: 24px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin-left: 24px;

    button {
      height: 48px;
    }

    .btn-cancel {
      width: 113px;
      color: rgba(73, 80, 87, 1);
      border: 1.5px solid #dee2e6;
      border-radius: 4px;
      background-color: rgba(222, 226, 230, 1);
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }
    .btn-submit {
      width: 192px;
      color: rgba(255, 255, 255, 1);
      border: 1.5px solid #dee2e6;
      border-radius: 4px;
      background-color: rgba(69, 41, 230, 1);
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
    }
    .btn-delete-profile {
      width: 192px;
      color: rgba(255, 255, 255, 1);
      border: 1.5px solid #dee2e6;
      border-radius: 4px;
      background-color: red;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 28px;
    }
  }
  @media screen and (min-width: 769px) {
    height: 100%;
    input {
      width: 466px;
    }

    textarea {
      max-width: 466px;
    }

    .btns-div {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;
