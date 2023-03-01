import styled from "styled-components";

export const ButtonHomeStyle = styled.button`
  width: 182px;
  height: 48px;
  border: 1.5px solid #fdfdfd;
  border-radius: 4px;
  background-color: transparent;
  margin-top: 40px;
  cursor: pointer;
  p {
    color: #fdfdfd;
    font-weight: 600;
    font-size: 16px;
  }
  :hover {
    background-color: #fdfdfd;
    p {
      color: #0b0d0d;
    }
  }
  @media only screen and (max-width: 655px) {
    width: 60%;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;