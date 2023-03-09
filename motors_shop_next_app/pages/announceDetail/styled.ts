import styled from "styled-components";

export const AnnounceDetailStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .deskTopFront {
    display: none;
  }

  @media (min-width: 769px) {
    .deskTopFront {
      display: flex;
      flex-direction: column;
    }
    
    .upside {
      display: flex;
      gap: 45px;
    }

    .mobileFront {
      display: none;
    }
  }
`;
