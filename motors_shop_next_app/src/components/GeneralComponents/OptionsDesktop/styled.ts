import styled from "styled-components";

export const MenuOptionsStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  z-index: 6;

  .conteinerOptions {
    position: fixed;
    right: 1vw;
    width: 200px;
    height: 200px;
    border: none;
    margin-right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    background-color: white;
    justify-content: center;

    .option {
      cursor: pointer;
      display: flex;
      justify-content: center;
      color: #495057;
      text-align: start;
      background-color: transparent;
      border: none;
      font-family: "Inter", sans-serif;
      width: 90%;
      font-weight: 400;
      font-size: 16px;
      padding-bottom: 5px;
    }
  }
`;
