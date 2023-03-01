import styled from "styled-components";

export const UserdataStyle = styled.div`
  display: none;
  .userName {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #495057;
  }

  .userDataContainer {
    display: none;
  }

  .nameAbreviation {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
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
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid #DEE2E6;
    height: 100%;
    cursor: pointer;
    padding-left: 1vw;
    margin-left: 1vw;
  }
`;
