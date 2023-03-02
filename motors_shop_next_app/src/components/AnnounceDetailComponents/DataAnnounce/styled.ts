import styled from "styled-components";

export const CommentsStyled = styled.section`
  margin-top: 30px;
  width: 95vw;
  min-height: 300px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 5px;

  .display {
    width: 100%;
    height: 100%;
  }

  .model {
    font-family: "Lexend", sans-serif;
    font-size: 22px;
    font-weight: 600;
    color:#212529;
  }
  .announceContainerInfo {
    margin-top: 35px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
  }

  .announceContainerInfoNumbers {
    display: flex;
    gap: 20px;
  }

  .announceInfoNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #4529E6;
    min-height: 32px;
    height: fit-content;
    padding: 5px;
    min-width: 50px;
    width: fit-content;
    text-align: center;
    border-radius: 5px;
    background-color: #EDEAFD;
  }

  .price {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-top: 32px;
    color: #212529;
  }

  .buy {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    width: 120px;
    height: 40px;
    background: #4529E6;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    color: #FFFFFF;
  }

  @media (min-width: 769px) {
    .announceContainerInfo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 50px;
    }
    .price {
      margin-top: 0px;
    }
  }
`;