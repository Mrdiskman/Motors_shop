import styled from "styled-components";

export const HomeNavStyle = styled.div`
  height: 550px;
  width: 100%;
  background-color: #5126ea;
  display: flex;
  align-items: center;
  justify-content: center;
  .containerNav {
    width: 748px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .titleHome {
      font-weight: 700;
      font-size: 44px;
      text-align: center;
      color: #fdfdfd;
    }
    .descriptionHome {
      margin-top: 20px;
      font-weight: 400;
      font-size: 16px;
      color: #f8f9fa;
    }
    .navHome {
      width: 381px;
      display: flex;
      justify-content: space-between;
    }
  }
  @media only screen and (max-width: 655px) {
    .containerNav {
      .navHome {
        width: 90%;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
