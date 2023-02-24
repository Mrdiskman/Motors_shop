import styled from "styled-components";

export const AnnouncerCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
  display: flex;
  padding-left: 30px;
  padding-top: 40px;
  padding-bottom: 35px;
  padding-right: 25px;
  flex-direction: column;
  width: 90%;
  min-height: 400px;
  height: fit-content;
  background-color: var(--whitefixed);
  border-radius: 5px;
  margin-top: 65px;



  .sellerNameAbreviation {
    display: flex;
    width: 105px;
    height: 105px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: var(--brand1);
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 53px;
    color: var(--whitefixed);
  }
  .dataContainerAnnouncer {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 25px;
  }

  .sellerName {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: var(--grey1);
  }

  .sellerRole {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 90px;
    height: 32px;
    background-color: var(--brand4);
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--brand1);
  }

  .sellerDescription {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);
    margin-bottom: 15px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 48px;
    border: 1.5px solid var(--brand1);
    border-radius: 5px;
    background-color: transparent;
    color: var(--brand1);
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }



  @media screen and (min-width: 769px) {
    width: 80%;
    margin-bottom: 100px;
  }
`;
