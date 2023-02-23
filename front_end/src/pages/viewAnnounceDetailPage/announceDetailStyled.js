import styled from "styled-components";

export const SectionPictures = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
  /* containers em geral */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button{
    cursor: pointer;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .containers {
    margin-top: 30px;
    width: 95vw;
    min-height: 300px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey10);
    border-radius: 5px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 5px;
  }
  .mainPicCOntainer {
    padding: 0px;
  }

  .descriptionContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
  }

  .containerPics {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 20px;
    min-height: 440px;
  }

  .sellerDataSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .containerMakeComment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  /* -------------- */

  /* Foto principal e pequenas */

  .MainPicture {
    width: 90%;
    height: 90%;
    border-radius: 5px;
  }
  .miniPictures {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  /* -------- */

  /* Informaçao do anuncio */
  .model {
    font-family: "Lexend", sans-serif;
    font-size: 22px;
    font-weight: 600;
  }
  .content {
    display: flex;
    flex-direction: column;
  }

  .announceContainerInfo {
    margin-top: 35px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
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
    padding: 5px;
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

  .display {
    width: 100%;
    height: 100%;
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
  /* -------------- */
  /* descriçao */
  .description {
    margin-top: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);
  }
  /* ------------ */

  /* Fotos pequenas */
  .titlePhotos {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  .ulListImages {
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
  /* --------------- */

  /* Parte do vendedor */
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 48px;
    background: var(--grey0);
    border: none;
    border-radius: 5px;
    color: var(--whitefixed);
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
  }
  /* --------------- */
  /* comentarios */
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
  /* --------------- */

  /* Fazer comentario */
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
    min-height: 80px;
    height: fit-content;
    border: 1.5px solid var(--grey7);
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: var(--grey3);
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
    background-color: var(--grey7);
    color: var(--grey3);
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 10px;
    border-radius: 24px;
  }
  .deskTopFront{
    display: none;
  }
  /* ----------- */
  @media (min-width: 769px) {
    display: flex;
    .mobileFront{
      display: none;
    }
    .deskTopFront{
    display: flex;
    flex-direction: column;
  }
    .announceContainerInfo{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 50px;
    }
    .price{
      margin-top: 0px;
    }
    .mainPicCOntainer {
      height: 30vh;
      width: 35vw;
    }

    .MainPicture {
      width: 70%;
      height: 90%;
      border-radius: 5px;
    }
    .containers {
      width: 40vw;
      min-height: 230px;
    }

    .containerRigths {
      width: 20vw;
    }
    .containerPics{
      padding-top: 50px;
      min-height: 345px;
      
    }
    .upside {
      display: flex;
      gap: 45px;
    }
  }
`;