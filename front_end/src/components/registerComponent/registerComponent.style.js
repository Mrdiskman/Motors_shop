import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--grey8);
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 44px 28px;
  gap: 32px;
  width: 92%;
  background-color: var(--grey10);
  margin-top: 15px;

  h1 {
    font-size: 24px;
    font-weight: bolder;
  }
  h2 {
    font-size: 14px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: -28px;
  }

  input {
    width: 91%;
    height: 30px;
    border-color: var(--grey5);
    border-radius: 4px;
  }

  div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 8%;

    .ipt_state {
      width: 40%;
      margin-top: -15px;
    }

    .ipt_city {
      width: 40%;
      margin-top: -15px;
    }

    .ipt_number {
      width: 40%;
      margin-top: -15px;
    }

    .ipt_complement {
      width: 40%;
      margin-top: -15px;
    }
  }
  .password_div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 0;

    .eye_div {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      margin-top: 9px;
    }
  }

  .div_type {
    display: flex;
    justify-content: center;
    width: 94%;

    button {
      height: 48px;
      width: 140px;
      border-radius: 5px;
      border-color: var(--grey5);
      background-color: var(--grey10);
    }

    button:hover {
      border-color: var(--brand1);
      background-color: var(--brand1);
      color: var(--whitefixed);
    }
  }

  .btnRegister {
    height: 48px;
    width: 94%;
    border-radius: 5px;
    border-color: var(--brand1);
    background-color: var(--brand1);
    color: var(--whitefixed);
  }

  .btnRegister:hover {
    border-color: var(--brand4);
    background-color: var(--brand4);
    color: var(--brand1);
  }

  @media screen and (min-width: 425px) {
    width: 420px;
    max-height: 100%;
    margin-top: 50px;
  }
`;
