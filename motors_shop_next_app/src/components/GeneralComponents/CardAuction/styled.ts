import styled from "styled-components";

export const CardAuctionStyle = styled.div`
  cursor: pointer;
  width: 602px;
  .sectionMainCard {
    :hover {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.7) 0%,
          #000000 100%
        ),
        url("https://media.istockphoto.com/id/1150931120/pt/foto/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=S9ogRwOFZeUrZisH4_sh56OMQB19qplp958cRde8Jx0=");
    }
    border-radius: 5px 5px 0px 0px;
    padding: 32px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.29) 0%,
        #000000 100%
      ),
      url("https://media.istockphoto.com/id/1150931120/pt/foto/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=S9ogRwOFZeUrZisH4_sh56OMQB19qplp958cRde8Jx0=");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 602px;
    height: 345px;
    .divTime {
      background-color: #ffffff;
      border: 1px solid #ffffff;
      border-radius: 32px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      padding: 5px;
      justify-content: space-between;
      width: 100px;
      height: 30px;
      p {
        font-size: 15px;
        font-weight: 600;
        color: #212529;
      }
      svg {
        font-size: 23px;
      }
    }
    .titleCard {
      font-weight: 600;
      font-size: 20px;
      color: #fdfdfd;
      margin-bottom: 20px;
    }
    .descriptionCard {
      font-size: 16px;
      color: #ced4da;
    }
    .sectionUser {
      margin-top: 20px;
      display: flex;
      align-items: center;
      max-height: 32px;
      img {
        width: 32px;
        height: 32px;
        border-radius: 150px;
      }
      p {
        font-size: 14px;
        color: #ffffff;
        margin-left: 5px;
      }
    }
    .containerInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info {
        margin-top: 20px;
        display: flex;
        .divInfo {
          margin-right: 15px;
          width: 45px;
          height: 28px;
          border: 1px solid transparent;
          border-radius: 5px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            color: #4529e6;
            font-size: 15px;
          }
        }
      }
      p {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
  .containerPage {
    border: 1px solid transparent;
    border-radius: 0px 0px 5px 5px;
    padding: 32px;
    max-width: 602px;
    max-height: 10px;
    background: #4529e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 18px;
      color: #ffffff;
    }
    svg {
      font-size: 30px;
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 655px) {
    width: 80vw;
    height: 600px;
    margin-right: 60px;
    .sectionMainCard {
      width: 100%;
      height: 390px;
      background-size: contain;
      .divTime {
        margin-bottom: 20px;
      }
      .containerInfo {
        display: block;
        .info {
          display: block;
          .divInfo {
            margin-top: 10px;
            text-align: center;
          }
        }
        p {
          margin-top: 10px;
        }
      }
    }
    .containerPage {
      width: 100%;
    }
  }
`;