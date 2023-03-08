import styled from "styled-components";
type Props = {
  active?: boolean;
};

export const VehicleCard = styled.div<Props>`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");
  display: flex;
  flex-direction: column;
  width: 312px;
  height: 360px;
  cursor: pointer;
  :hover {
    .div_img {
      border: 3px solid #4529e6;
      border-radius: 5px;
      .div_active {
        display: none;
      }
      img {
        width: 90%;
      }
    }
  }
  .titleCarrousel {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #212529;
  }
  .descriptionCarrousel {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #495057;
  }
  .miniatureCarrousel {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
  }
  .nameAnnouncer {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #495057;
  }
  .div_img {
    border: 3px solid transparent;
    width: 312px;
    height: 154px;
    background-color: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    .div_active {
      background-color: ${(props) => (props.active ? "#4529E6" : "#ADB5BD")};
      position: absolute;
      top: 0%;
      left: 2%;
      width: 51px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      .active_title {
        margin-top: 0px;
        font-size: 14px;
        font-family: "Inter";
        font-weight: 500;
        text-align: center;
        color: #ffffff;
      }
    }
    img {
      background-size: cover;
      width: 80%;
    }
  }
  h1 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }
  h2 {
    font-weight: bolder;
    margin-top: 16px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    max-width: 312px;
    text-overflow: ellipsis;
    color: #495057;
  }
  p {
    max-width: 93%;
    max-height: 43px;
    margin-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
    color: #495057;
  }
  .divAnnouncer {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    p {
      width: 32px;
      height: 32px;
      margin-right: 8px;
      background-color: #cd2b31;
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      line-height: 39px;
      font-size: 14px;
      color: #ffffff;
    }
    span {
      font-size: 14px;
      color: #495057;
    }
  }
  .div_edit {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 13px;

    .button_edit {
      cursor: pointer;
      width: 105px;
      height: 38px;
      border: 1.5px solid #212529;
      border-radius: 4px;
      color: #212529;
      font-size: 14px;
      font-family: "Inter";

      :hover {
        background-color: #5126ea;
        color: #0b0d0d;
        border: 1.5px solid #5126ea;
      }
    }
  }
`;

export const VehiclePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  font-weight: bolder;
  .price {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #212529;
    height: 32px;
    text-align: center;
  }
  .divItens {
    display: flex;
    width: 50%;
    height: 32px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    .numbers {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #4529e6;
    }
    .km_div {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 200px;
      height: 32px;
      border-radius: 4px;
      background-color: #edeafd;
      color: #4529e6;
    }
    .year_div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 32px;
      border-radius: 4px;
      background-color: #edeafd;
      color: #4529e6;
    }
  }
`;
