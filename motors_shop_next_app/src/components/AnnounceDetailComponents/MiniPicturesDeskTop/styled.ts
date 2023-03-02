import styled from "styled-components";

export const MiniPicturesDesktopContainer = styled.div`
  display: none;
  margin-top: 30px;
  width: 95vw;
  min-height: 440px;
  height: fit-content;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background-color: #FDFDFD;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 5px;
  gap: 20px;

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
  .miniPictures {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  @media (min-width: 769px) {
    display: flex;
    width: 20vw;
    min-height: 230px;
    .containerPics {
      padding-top: 50px;
      min-height: 345px;
    }
  }
`;
