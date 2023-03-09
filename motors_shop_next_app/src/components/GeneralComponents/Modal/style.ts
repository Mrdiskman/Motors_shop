import styled from "styled-components";

export const OverWindow = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 0px;
  left: 0;

  padding: 40px;

  min-width: 100vw;
  min-height: 100%;

  z-index: 99;

  background: rgba(0, 0, 0, 0.5);

  overflow-y: scroll;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  width: 90%;

  padding: 10px;
  top: 50px;

  background: #ffffff;
  border-radius: 8px;

  gap: 10px;

  .modal.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    top: 0px;

    width: 100%;
    height: 56px;

    .close {
      margin: 0;
      padding: 0;
      width: 5%;
      background: transparent;
      border: none;
    }

    .icon-close {
      color: #adb5bd;
      font-size: 2.5vh;

      :hover {
        transition: 0.5s all ease-in-out;
        color: #cd2b31;
      }
    }
  }

  .title {
    font: "500 16px/20px 'Lexend', sans-serif";
    color: #495057;
  }

  .subtitle {
    font: "400 16px/28px 'Inter', sans-serif";
  }

  .container {
    height: 40px;
    background: red;
  }

  .right {
    color: #495057;

    background: #dee2e6;

    border: none;

    :hover {
      border: 0.5px solid #000;
    }
  }

  .left {
    justify-content: center;

    width: 50%;

    color: #cd2b31;

    background: #fdd8d8;
    border: none;

    padding: 0;

    :hover {
      border: 0.5px solid red;
    }
  }

  //MODALS

  // (DELETE)
  .delete.select {
    display: flex;
    justify-content: center;

    width: 100%;

    gap: 10px;
  }

  // (EDIT)
  .edit.select {
    display: flex;
    justify-content: center;

    width: 100%;

    gap: 10px;

    .save {
      background: #4529e6;
      color: #ffffff;
      :hover {
        border: 0.5px solid #b0a6f0;
      }
    }
  }
  @media screen and (min-width: 560px) {
    width: 520px;

    .delete.select {
      justify-content: flex-end;
      padding-left: 25%;

      .select.delete {
        min-width: 211px;
      }
    }
  }
`;
