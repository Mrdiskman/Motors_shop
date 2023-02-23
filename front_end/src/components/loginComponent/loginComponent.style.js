import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: var(--grey8);
  min-height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  width: 92%;
  height: 542px;
  padding: 44px 28px;
  gap: 32px;
  background-color: var(--whitefixed);

  h1 {
    font-size: 24px;
    font-weight: bolder;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 91%;
    height: 30px;
    border-color: var(--grey5);
    border-radius: 4px;
    margin-top: -25px;
  }

  span {
    display: flex;
    justify-content: flex-end;
    margin-top: -25px;
    margin-right: 20px;
    color: var(--grey2);
  }

  .password_div {
    display: flex;

    .eye_div {
      display: flex;
      justify-content: flex-end;
      margin-left: -8%;
      margin-top: 10px;
    }
  }

  .btnSingIn {
    height: 48px;
    width: 92%;
    border-radius: 5px;
    border-color: var(--brand1);
    background-color: var(--brand1);
    color: var(--whitefixed);
    font-weight: bolder;
  }

  .btnSingIn:hover {
    border-color: var(--brand4);
    background-color: var(--brand4);
    color: var(--brand1);
  }

  .btnSingUp {
    height: 48px;
    width: 92%;
    border-radius: 5px;
    border-color: var(--grey5);
    background-color: var(--grey10);
    color: var(--grey1);
    font-weight: bolder;
  }
  .btnSingUp:hover {
    border-color: var(--grey1);
    background-color: var(--grey1);
    color: var(--whitefixed);
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--grey2);
  }

  @media screen and (min-width: 425px) {
    width: 420px;
    max-height: 100%;
    margin-top: 50px;
  }
`;
