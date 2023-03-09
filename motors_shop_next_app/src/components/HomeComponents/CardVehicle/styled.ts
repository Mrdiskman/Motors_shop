import styled from "styled-components";

type ICardProps = {
  active?: boolean;
};
type IImgProps = {
  img?: string;
};

export const Card = styled.li<ICardProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 312px;

  border-radius: 10px;
  /* border: 0.5px solid var(--brand2); */

  :hover {
    transition: 0.5s all ease-in-out;
    /* transform: scale(1.005); */
  }
`;

export const CardImg = styled.figure<IImgProps>`
  width: 100%;
  height: 152px;

  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 10px;

  :hover {
    border: 2px solid var(--brand1);

    transition: 0.1s all ease-in-out;
  }
`;

export const CardInfo = styled.div<IImgProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  padding: 0px 10px 10px 10px;

  .card.title {
    font: var(--Heading-2-600);
    font-size: 100%;
  }

  .card.description {
    font: var(--body-2-400);
    color: var(--grey2);
  }

  .card.owner {
    display: flex;
    align-items: center;

    gap: 5px;

    .card.owner.inicials {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 32px;
      height: 32px;

      background-color: var(--brand1);
      border-radius: 150px;

      font: var(--body-2-500);
      color: var(--whiteFixed);
    }

    .card.owner.name {
      font: var(--body-2-500);
      color: var(--grey2);
    }
  }

  .card.info.rotation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info {
      display: flex;

      gap: 10px;

      font: var(--body-2-500);
      .box {
        display: flex;
        align-items: center;

        padding: 4px 8px;

        background-color: var(--brand4);

        border-radius: 4px;

        color: var(--brand1);
      }
    }
  }
`;
