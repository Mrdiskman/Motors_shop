import styled from "styled-components";

export const ImageContainer = styled.div`
  margin-top: 30px;
  width: 95vw;
  min-height: 300px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FDFDFD;
  border-radius: 5px;
  padding: 0px;

  .MainPicture {
    width: 90%;
    height: 90%;
    border-radius: 5px;
  }
  @media (min-width: 769px) {
    height: 30vh;
    width: 35vw; 
  }
`;
