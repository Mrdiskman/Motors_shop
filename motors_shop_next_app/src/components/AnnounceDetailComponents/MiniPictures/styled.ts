import styled from "styled-components";

export const MiniPicturesContainer = styled.div`
  margin-top: 30px;
  width: 95vw;
  min-height: 340px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 5px;
  gap: 20px;

  button {
    cursor: pointer;
  }
  
  .titlePhotos {
    width: 100%;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #212529;
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
    display: none;
  }
`;
