import styled from "styled-components";

export const LoginStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 70px;
  color: #000000;

  button {
    cursor: pointer;
  }
  .formLogin {
    width: 90%;
    padding-bottom: 50px;
    background-color: #fdfdfd;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
  }
  input {
    width: 80%;
    height: 45px;
    border: 1.5px solid #e9ecef;
    border-radius: 5px;
    color: #868e96;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding-left: 15px;
  }
  .forgetPassword {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    background-color: transparent;
    height: 20px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    border: none;
    color: #495057;
  }
  .typeForm {
    width: 80%;
    justify-content: flex-start;
    margin-bottom: 35px;
    margin-top: 45px;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }
  label {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: 7px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #212529;
  }
  .send {
    gap: 10px;
    width: 80%;
    height: 48px;
    background-color: #4529e6;
    border: 1.5px solid #4529e6;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .dontHaveAcc {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #495057;
  }
  .register {
    gap: 10px;
    width: 80%;
    height: 48px;
    border: 1.5px solid #adb5bd;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #0b0d0d;
    margin-top: 30px;
  }
  @media (min-width: 769px) {
    height: 76.7vh;
    .formLogin {
      min-width: 350px;
      width: 25%;
    }
  }
`;
