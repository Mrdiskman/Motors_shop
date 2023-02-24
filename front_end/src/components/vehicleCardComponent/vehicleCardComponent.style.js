import styled from "styled-components";

export const VehicleCard = styled.div`
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
        position: static;
      }
      img {
        width: 90%;
        position: absolute;
      }
    }
  }
  .titleCarrousel {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey1);
  }
  .descriptionCarrousel {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
  }
  .miniatureCarrousel {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--whitefixed);
  }
  .nameAnnouncer {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
  }
  .div_img {
    width: 312px;
    height: 154px;
    background-color: var(--grey7);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    .div_active {
      background-color: ${(props) => (props.active ? "#4529E6" : "#ADB5BD")};
      position: absolute;
      top: 0%;
      left: 0%;
      width: 51px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        height: 100%;
        font-size: 14px;
        text-align: center;
        color: #ffffff;
      }
    }
    img {
      background-size: cover;
      width: 80%;
    }
  }

  h2 {
    font-weight: bolder;
    margin-top: 16px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    max-width: 312px;
    text-overflow: ellipsis;
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
    color: var(--grey2);
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
      background-color: var(--alert1);
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      line-height: 39px;
      font-size: 14px;
      color: var(--whitefixed);
    }
    span {
      font-size: 14px;
      color: var(--grey2);
    }
  }
`;

export const VehiclePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  font-weight: bolder;

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
      color: var(--brand1);
    }
    .price {
      font-family: "Lexend", sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);
    }
    .km_div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 32px;
      border-radius: 4px;
      background-color: var(--brand4);
      color: var(--brand1);
    }
    .year_div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 32px;
      border-radius: 4px;
      background-color: var(--brand4);
      color: var(--brand1);
    }
  }
`;
