import styled from "styled-components";

export const SectionPictures = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
  display: flex;
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .containerPrimaryPicture {
      margin-top: 45px;
      width: 95vw;
      height: 35vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--grey10);
      border-radius: 5px;
    }
    .MainPicture {
      width: 85%;
      height: 80%;
      border-radius: 5px;
    }

    .containerData {
      display: flex;
      border-radius: 5px;
      flex-direction: column;
      background-color: var(--grey10);
      margin-top: 20px;
      height: 35vh;
      width: 95vw;
      display: flex;
      padding-left: 20px;
      padding-top: 20px;
    }

    .announceContainerInfo {
      margin-top: 35px;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
    }
    .model {
      font-family: "Lexend", sans-serif;
      font-size: 20px;
      font-weight: 600;
    }
    .miniPictures {
      width: 5%;
      height: 5%;
    }
    .announceInfoNumber {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: var(--brand1);
      min-height: 32px;
      height: fit-content;
      min-width: 50px;
      width: fit-content;
      text-align: center;
      border-radius: 5px;
      background-color: var(--brand4);
    }
    .announceContainerInfoNumbers {
      display: flex;
      gap: 20px;
    }
    .price {
      font-family: "Lexend", sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      margin-top: 32px;
    }
    .buy {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 20px;
      width: 120px;
      height: 40px;
      background: var(--brand1);
      border: none;
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
      font-family: "Inter", sans-serif;
      color: var(--whitefixed);
    }

    .containerDescription {
      background-color: var(--grey10);
      margin-top: 25px;
      width: 95vw;
      min-height: 35vh;
      height: fit-content;
      font-family: "Lexend", sans-serif;
      padding-left: 10px;
      padding-top: 20px;
      font-weight: 600;
      font-size: 20px;
    }
    .description {
      margin-top: 30px;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--grey2);
    }

    .divMiniPics {
      margin-top: 25px;
      width: 95vw;
      min-height: 35vh;
      height: fit-content;
      display: flex;
      flex-direction: column;
      background-color: var(--grey10);
      border-radius: 5px;
      padding-top: 20px;
      padding-left: 10px;
      gap: 20px;
    }

    .titlePhotos {
      font-family: "Lexend", sans-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      margin-left: 10px;
    }

    .containerMiniPictures {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .listImages {
      width: 100px;
      height: 90px;
      border-radius: 5px;
    }
    .miniPictures {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .sellerDataSection {
      margin-top: 25px;
      width: 95vw;
      min-height: 35vh;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--grey10);
      border-radius: 5px;
      padding-top: 20px;
      padding-left: 10px;
      gap: 20px;
    }
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
      font-size: 20px;
      line-height: 25px;
      color: var(--grey1);
      font-family: "Lexend", sans-serif;
      font-weight: 600;
    }

    .sellerDescription {
      font-family: "Inter", sans-serif;
      width: 90%;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      text-align: justify;
      color: var(--grey2);
    }
    .seeAnnounces {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 206px;
      height: 48px;
      background: var(--grey0);
      border: none;
      border-radius: 5px;
      color: var(--whitefixed);
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 40px;
    }
    .containerCommentData {
      margin-top: 25px;
      width: 95vw;
      min-height: 35vh;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--grey10);
      border-radius: 5px;
      padding-top: 20px;
      padding-left: 10px;
    }
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
      color: var(--whitefixed);
    }
    .nameComment {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: var(--grey1);
    }
    .descriptionComment {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--grey2);
    }
  }
  .containerMakeComment {
    margin-top: 25px;
    width: 95vw;
    min-height: 35vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--grey10);
    border-radius: 5px;
    padding-top: 20px;
    padding-left: 10px;
    gap: 20px;
  }
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
    background-color: var(--brand1);
    width: 38px;
    height: 38px;
    color: var(--whitefixed);
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
  .nameMakeComment {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
  .inputComment {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    width: 80%;
    min-height: 150px;
    height: fit-content;
    border: 1.5px solid var(--grey7);
    border-radius: 5px;
  }
  .buttonMakeComment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 38px;
    background: var(--brand1);
    border: 1.5px solid var(--brand1);
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: var(--whitefixed);
  }
  .like{
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .autoComment{
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 30px;
    background-color: var(--grey7);
    color: var(--grey3);
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 10px;
    border-radius: 24px;
  }
  .footerAnnounce{
    font-family: "Inter", sans-serif;
    font-weight: 500;
    height: 35vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey0);
    color: var(--whitefixed);
    gap: 50px;
    margin-top: 45px;
  }
  .titleFooter{
    font-size: 28px;
    font-weight: 700;
  }
  .spanTitleFooter{
    font-size: 19px;
  }
  .upPage{
    background-color: var(--grey1);
    border-radius: 5px;
    height: 45px;
    width: 50px;
    border: none;
    color: var(--whitefixed);
    font-size: 18px;
  }
`;
