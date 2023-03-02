import styled from "styled-components";

export const NotLoggedStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-left: solid 2px #dee2e6;
  padding-left: 2%;
  margin-left: 2%;
  height: 100%;

  .actionButton {
    width: 100px;
    height: 40px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    background-color: transparent;
    border: none;
    color: #495057;
    cursor: pointer;
  }
  .actionButton:hover {
    color: #0b0d0d;
    border: 1.5px solid #adb5bd;
    border-radius: 5px;
    transition: 0.5s;
  }
`;
