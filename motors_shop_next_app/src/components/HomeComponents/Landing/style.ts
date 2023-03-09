import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 50vh;
  min-height: 450px;

  background-color: var(--brand2);

  .box.description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    width: 100%;
    height: 80%;

    gap: 30px;

    .description {
      color: var(--grey10);
    }

    .main {
      font: var(--Heading-3-600);
    }

    .sub {
      font: var(--body-1-400);
    }
    .box.select {
      display: flex;
      flex-direction: column;

      gap: 25px;

      .select {
        width: 90vw;

        border: 0.5px solid #fff;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .box.description {
      .main {
        font: var(--Heading-1-700);
      }
      .sub {
        font: var(--body-1-400);
      }
      .box.select {
        display: flex;
        flex-direction: row;
        .select {
          width: 15vw;
        }
      }
    }
  }
`;
