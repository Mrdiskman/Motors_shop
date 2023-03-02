import styled from "styled-components";

export const BackGroundStyle = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
  min-height: 91vh;
  height: fit-content;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    #4529E6 31.25%,
    #E9ECEF 31.26%,
    #E9ECEF 100%
  );
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .titleHome {
    width: 100%;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: var(--grey0);
    padding-left: 50px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  @media (min-width: 769px) {
    background-image: linear-gradient(
      180deg,
      #4529e6 24%,
      #f1f3f5 24%,
      #f1f3f5 100%
    );
  }
`;