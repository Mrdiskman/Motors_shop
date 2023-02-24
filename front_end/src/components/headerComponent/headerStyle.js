import styled from "styled-components";

export const HeaderStyle = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 35%;
  position: relative;
  z-index: 0;
  .navBar {
    display: none;
  }
  .userDataContainer {
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
    width: 100vw;
    justify-content: center;
    align-items: center;
    gap: 0px;
    li {
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
    .userDataContainer {
      margin-left: 2%;
      padding: 1%;
      display: flex;
      width: 10%;
      height: 80px;
      justify-content: center;
      align-items: center;
      gap: 5px;
      border-left: solid 2px #dee2e6;
      cursor: pointer;
    }
    .navBar {
      display: flex;
      width: 70%;
      justify-content: end;
    }
    .containerNameAbreviation {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #5126ea;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      margin-right: 5px;
    }
    .nameAbreviation {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #ffffff;
    }
    .userName {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: #495057;
    }
    .title {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 30px;
      background-image: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 46%,
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

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  width: 100%;

  .conteinerOptionsMobile {
    width: 50%;
    height: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: white;
    justify-content: center;
    align-items: center;

    .option {
      display: flex;
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
      justify-content: center;
      align-items: center;
      font-weight: bolder;
    }
  }
  .listMobile {
    list-style: none;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #495057;
  }
  .listContainerMobile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;
    gap: 20%;
    list-style: none;
    border-bottom: black 1px solid;
    padding-bottom: 15px;

    li {
      font-weight: bolder;
    }
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

export const MenuOptions = styled.div`
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
