import styled from "styled-components";

export const SellerDataStyled = styled.div`
  margin-top: 30px;
  width: 95vw;
  min-height: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  font-family: "Lexend", sans-serif;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 10px;
  padding-right: 5px;
  color: #212529;
  
  button{
    cursor: pointer;
  }
  
  .description {
    margin-top: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #495057;
  }
  @media (min-width: 769px) {
    width: 40vw;
  }
`;
