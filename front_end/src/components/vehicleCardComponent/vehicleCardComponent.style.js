import styled from "styled-components";

export const VehicleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  height: 360px;
  cursor: pointer;
  :hover {
    .div_img {
      border: 3px solid #4529e6;
      img {
        width: 89%;
      }
    }
  }

  .div_img {
    width: 312px;
    height: 154px;
    background-color: var(--grey7);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
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
