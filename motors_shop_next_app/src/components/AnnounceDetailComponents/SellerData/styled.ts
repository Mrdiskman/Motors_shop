import styled from "styled-components";

export const SellerDataStyled = styled.div`
  margin-top: 30px;
  width: 95vw;
  min-height: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 5px;
  gap: 20px;

  button{
    cursor: pointer;
  }
  
  .sellerNameAbreviation {
    width: 80px;
    height: 80px;
    background-color: #212529;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    line-height: 39px;
    font-size: 25px;
  }

  .sellerName {
    font-size: 20px;
    line-height: 25px;
    color: #212529;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
  }

  .sellerDescription {
    font-family: "Inter", sans-serif;
    width: 90%;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    text-align: justify;
    color: #495057;
  }
  .seeAnnounces {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 48px;
    background: #0B0D0D;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (min-width: 769px) {
    width: 20vw;
  }
`;
