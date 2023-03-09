import styled from "styled-components";

export const HeaderStyle = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35%;
  background-color: #fdfdfd;
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 22px;
  }
  li:hover {
    transition: 0.5s;
    cursor: pointer;
    font-size: 18px;
    color: black;
    font-weight: 700;
  }
  .navBar {
    display: none;
  }
  .title {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 28px;
    background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 20%,
      rgba(69, 41, 230, 1) 57%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }
  .titleStyle {
    font-size: 20px;
  }
  .menuMobile {
    display: flex;
  }
  .btnMobile {
    display: flex;
    background-color: transparent;
    border: none;
    font-size: 25px;
  }
  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 0px;
    li {
      cursor: pointer;
      list-style: none;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: #495057;
    }
    .containerList {
      display: flex;
      justify-content: flex-end;
      gap: 50px;
    }

    .navBar {
      display: flex;
      width: 70%;
      justify-content: end;
    }

    .title {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 30px;
      background-image: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 20%,
        rgba(69, 41, 230, 1) 57%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;
    }
    .titleStyle {
      font-size: 20px;
    }
    .btnMobile,
    .menuMobile {
      display: none;
    }
  }
`;
