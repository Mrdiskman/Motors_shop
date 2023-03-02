import styled from "styled-components";

export const MakeCommentStyled = styled.div`
  margin-top: 30px;
  width: 95vw;
  min-height: 440px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background-color: #fdfdfd;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 5px;
  gap: 20px;

  .makeCommentUserData {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .makeCommentNameAbreviation {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #4529E6;
    width: 38px;
    height: 38px;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  .nameMakeComment {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #212529;
  }
  .inputComment {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    width: 80%;
    min-height: 80px;
    height: fit-content;
    border: 1.5px solid #E9ECEF;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #868E96;
  }
  .buttonMakeComment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 38px;
    background: #4529E6;
    border: 1.5px solid #4529E6;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
  }
  .like {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .autoComment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 30px;
    background-color: #E9ECEF;
    color: #868E96;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 10px;
    border-radius: 24px;
  }
`;