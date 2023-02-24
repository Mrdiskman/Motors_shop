import styled from "styled-components";

export const AnnouncerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 29px;
  gap: 16px;
  position: absolute;
  width: 92%;
  height: 500px;
  left: 16px;
  top: 145px;
  background: var(--grey10);
  border-radius: 4px;
  margin-bottom: 400px;

  .sellerNameAbreviation {
    width: 80px;
    height: 80px;
    background-color: var(--brand1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--whitefixed);
    font-family: "Inter", sans-serif;
    font-weight: 500;
    line-height: 39px;
    font-size: 25px;
  }

  .sellerName {
    position: absolute;
    width: 92%;
    height: 25px;
    left: 29px;
    top: 168px;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);
  }

  .sellerRole {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;

    position: absolute;
    width: 92px;
    height: 32px;
    left: 168px;
    top: 165px;
    color: var(--brand1);

    background: var(--brand4);
    border-radius: 4px;
  }

  .sellerDescription {
    position: absolute;
    width: 78%;
    height: 140px;
    left: 29px;
    top: 217px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);
  }

  button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;
    width: 160px;
    height: 48px;
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
    background-color: var(--whitefixed);
    margin-top: 373px;
    position: absolute;

    p {
      width: 104px;
      height: 0px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 0px;

      color: var(--brand1);
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }

  @media screen and (min-width: 769px) {
    position: absolute;
    width: 90%;
    height: 500px;
    left: 5%;
    top: 155px;

    background: var(--grey10);
    border-radius: 4px;

    .sellerDescription {
      width: 90%;
    }
  }
`;
