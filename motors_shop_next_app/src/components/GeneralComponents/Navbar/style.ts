import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;

  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 2;

  width: 100vw;

  img {
    cursor: pointer;
  }
`;

export const StyledDesktopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 50px 0px 50px;

  width: 100vw;
  height: 80px;

  background: var(--grey10);
  border-bottom: 2px solid var(--grey6);

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .pages {
    display: flex;
    flex-direction: row;
    padding-right: 50px;
    a {
      font: var(--body-1-600);
      color: var(--grey2);
      transition: 0.5s;

      &:hover {
        color: var(--grey4);
        transition: 0.5s;
      }
    }

    a + a {
      padding-left: 25px;
    }
  }

  .user {
    display: flex;
    align-items: center;

    border-left: 2px solid var(--grey6);
    padding-left: 35px;
  }

  .login-signin {
    display: flex;
    align-items: center;

    height: 40px;

    border-left: 2px solid var(--grey6);
    padding-left: 35px;

    a {
      font: var(--body-1-600);
      color: var(--grey2);
      transition: 0.5s;

      &:hover {
        color: var(--grey6);
        transition: 0.5s;
      }
    }

    button {
      margin-left: 45px;
    }
  }
`;

export const StyledMobileNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--grey10);

  border-bottom: 2px solid var(--grey6);

  width: 100%;
  height: 80px;

  padding: 0px 20px;
`;

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: row;

  > ul {
    position: fixed;
    top: 0;

    width: 100vw;

    margin-top: 90px;

    background: var(--whiteFixed);

    li {
      padding: 15px;

      font: var(--body-1-600);
      color: var(--grey2);
      transition: 0.5s;

      &:hover {
        color: var(--grey4);
      }
    }

    div {
      border-top: 1.5px solid var(--grey5);

      padding-top: 25px;

      margin: 40px 0px 20px 0px;
    }
  }

  .user-dropDown {
    display: flex;
    flex-direction: column;

    background: var(--grey9);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-left: 10px;

    width: 170px;

    li {
      font: var(--body-1-400);
      color: var(--grey3);

      cursor: pointer;
      transition: 0.5s;

      padding: 8px 0px 8px 15px;
    }
  }
`;
