import styled from "styled-components";

export const CommentsStyled = styled.section`
  margin-top: 30px;
  width: 95vw;
  min-height: 300px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FDFDFD;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 5px;
  .comments {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .dataComments {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    align-items: center;
  }
  .abreviationNameComment {
    width: 35px;
    height: 35px;
    background-color: var(--alert1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    line-height: 39px;
    font-size: 14px;
    color: #FFFFFF;
  }
  .nameComment {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #212529;
  }
  .descriptionComment {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #495057;
  }
`;
