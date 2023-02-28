import styled from "styled-components";

export const FooterComponent = styled.footer`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey0);
  color: var(--whitefixed);
  gap: 50px;
  margin-right: 0px;

  .titleFooter {
    font-size: 22px;
    font-weight: 700;
  }
  .spanTitleFooter {
    font-size: 19px;
  }
  .rigths {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  .upPage {
    background-color: var(--grey1);
    border-radius: 5px;
    height: 40px;
    width: 45px;
    border: none;
    color: var(--whitefixed);
    font-size: 18px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 30%;
    height: 15vh;
  }
`;