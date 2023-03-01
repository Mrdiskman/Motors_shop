import styled from "styled-components";

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
    border: none;
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
    border-bottom:none;
    padding-bottom: 15px;

    li {
      font-weight: bolder;
    }
    @media (min-width: 769px) {
      display: none;
    }
  }
`;