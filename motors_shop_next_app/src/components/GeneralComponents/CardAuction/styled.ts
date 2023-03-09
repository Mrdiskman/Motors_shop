import styled from "styled-components";

type ISectionProps = {
  img?: string;
};

export const Card = styled.li`
  width: 602px;

  .card.link {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 62px;

    padding: 24px 36px;

    background-color: var(--brand1);

    border: none;

    color: var(--whiteFixed);

    border-radius: 0 0 10px 10px;

    .text {
      font: var(--button-big-text);
    }

    .link {
      font-size: 30px;
    }
  }
`;

export const CardInfo = styled.div<ISectionProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: 326px;

  padding: 20px;

  /* background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  background-color: black;

  border-radius: 10px 10px 0 0;

  .card.info.time {
    display: flex;
    align-items: center;

    gap: 10px;

    width: 123px;

    padding: 5px;

    border-radius: 40px;

    background-color: var(--whiteFixed);
    .clock {
      font: var(--Heading-7-500);
    }
    .icon.clock {
      color: var(--brand1);
    }
  }

  .card.desctiption {
    width: 100%;
    .card.desctiption.title {
      font: var(--Heading-6-600);
      color: var(--grey10);
    }

    .card.desctiption.sub {
      font: var(--body-1-400);
      color: var(--grey5);
    }
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

      color: var(--whiteFixed);

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
