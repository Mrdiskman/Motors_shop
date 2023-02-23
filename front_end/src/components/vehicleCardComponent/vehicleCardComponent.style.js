import styled from "styled-components";

export const VehicleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 300px;

  .div_img {
    height: 152px;
    background-color: var(--grey7);
    img {
      height: 152px;
      width: 90%;
      margin-left: 5%;
    }
  }

  h2 {
    font-weight: bolder;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    max-width: 312px;
    text-overflow: ellipsis;
  }

  p {
    max-width: 312px;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--grey2);
  }

  span {
    margin-top: 20px;
    color: var(--grey2);
  }
`;

export const VehiclePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  font-weight: bolder;

  div {
    display: flex;
    width: 50%;
    height: 32px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    .km_div {
      display: flex;
      justify-content: center;
      width: 50px;
      height: 32px;
      border-radius: 4px;
      background-color: var(--brand4);
      color: var(--brand1);
    }
    .year_div {
      display: flex;
      justify-content: center;
      width: 50px;
      height: 32px;
      border-radius: 4px;
      background-color: var(--brand4);
      color: var(--brand1);
    }
  }
`;
