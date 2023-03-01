import styled from "styled-components";

export const MenuOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 6;
  margin-left: 87%;

  .conteinerOptions {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: white;
    justify-content: center;

    .option {
      cursor: pointer;
      color: #495057;
      text-align: start;
      background-color: transparent;
      border: none;
      font-family: "Inter", sans-serif;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      padding-bottom: 5px;
    }
  }
 `; 