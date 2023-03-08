import styled, { css } from "styled-components";

interface IStyledButton {
  width_mobile?: string;
  width_desktop?: string;
  colorStyle?:
    | "grey-0__white-fixed"
    | "grey-1__white-fixed"
    | "grey-6__grey-2"
    | "grey-5__grey-2"
    | "grey-5__white-fixed"
    | "brand-1__white-fixed"
    | "brand-2__white-fixed"
    | "brand-4__brand-1"
    | "grey-10__grey-1"
    | "transparent__grey-10"
    | "grey-1__grey-10"
    | "grey-4__grey-0"
    | "grey-1__grey-10"
    | "transparent__brand-1"
    | "transparent__grey-0_2"
    | "brand-4__brand-1_2"
    | "transparent__grey-0"
    | "grey-8__grey-0"
    | "alert-3__alert-1"
    | "alert-2__alert-1"
    | "success-3__success-1"
    | "success-2__success-1"
    | "brand-3__brand-4";
}

const StyledButton = styled.button<IStyledButton>`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding: 12px 20px;
  gap: 10px;

  width: ${(props) => props.width_mobile || "119px"};
  height: 38px;

  border-radius: 4px;

  margin: 8px 0px 8px 8px;

  font: var(--button-medium-text);

  @media (min-width: 768px) {
    width: ${(props) => props.width_desktop || "146px"};
    height: 48px;

    padding: 12px 28px;

    margin: 12px 0px 12px 12px;

    font: var(--button-big-text);
  }

  ${(props) => {
    switch (props.colorStyle) {
      case "grey-0__white-fixed":
        return css`
          background: var(--grey0);
          border: 1.5px solid var(--grey0);
          color: var(--whiteFixed);

          &:hover {
            background: var(--grey2);
          }
        `;
      case "grey-1__white-fixed":
        return css`
          background: var(--grey1);
          border: 1.5px solid var(--grey1);
          color: var(--whiteFixed);

          &:hover {
            background: var(--grey2);
          }
        `;
      case "grey-6__grey-2":
        return css`
          background: var(--grey6);
          border: 1.5px solid var(--grey6);
          color: var(--grey2);

          &:hover {
            background: var(--grey7);
          }
        `;
      case "grey-5__grey-2":
        return css`
          background: var(--grey5);
          border: 1.5px solid var(--grey5);
          color: var(--grey2);

          &:hover {
            background: var(--grey6);
          }
        `;
      case "grey-5__white-fixed":
        return css`
          background: var(--grey5);
          border: 1.5px solid var(--grey5);
          color: var(--whiteFixed);

          &:hover {
            background: var(--grey6);
          }
        `;
      case "brand-1__white-fixed":
        return css`
          background: var(--brand1);
          border: 1.5px solid var(--brand1);
          color: var(--whiteFixed);

          &:hover {
            background: var(--brand3);
            border: 1.5px solid var(--brand3);
          }
        `;
      case "brand-2__white-fixed":
        return css`
          background: var(--brand2);
          border: 1.5px solid var(--brand2);
          color: var(--whiteFixed);

          &:hover {
            background: var(--brand3);
            border: 1.5px solid var(--brand3);
          }
        `;
      case "brand-4__brand-1":
        return css`
          background: var(--brand4);
          border: 1.5px solid var(--brand4);
          color: var(--brand1);

          &:hover {
            background: var(--brand3);
            border: 1.5px solid var(--brand3);
          }
        `;
      case "grey-10__grey-1":
        return css`
          background: var(--grey10);
          border: 1.5px solid var(--grey10);
          color: var(--grey1);

          &:hover {
            background: var(--grey7);
            border: 1.5px solid var(--grey7);
          }
        `;
      case "transparent__grey-10":
        return css`
          background: none;
          border: none;
          color: var(--grey10);

          &:hover {
            background: var(--grey7);
            border: 1.5px solid var(--grey7);
          }
        `;
      case "transparent__grey-0":
        return css`
          background: none;
          border: 1.5px solid var(--grey0);
          color: var(--grey0);

          &:hover {
            background: var(--grey7);
            border: 1.5px solid var(--grey3);
          }
        `;
      case "grey-1__grey-10":
        return css`
          background: var(--grey1);
          border: 1.5px solid var(--grey10);
          color: var(--grey10);

          &:hover {
            background: var(--grey3);
            border: 1.5px solid var(--grey3);
          }
        `;
      case "grey-1__grey-10":
        return css`
          background: var(--grey1);
          border: 1.5px solid var(--grey10);
          color: var(--grey10);

          &:hover {
            background: var(--grey3);
            border: 1.5px solid var(--grey3);
          }
        `;
      case "grey-4__grey-0":
        return css`
          background: none;
          border: 1.5px solid var(--grey4);
          color: var(--grey0);

          &:hover {
            background: var(--grey7);
            border: 1.5px solid var(--grey5);
          }
        `;
      case "transparent__brand-1":
        return css`
          background: none;
          border: 1.5px solid var(--brand1);
          color: var(--brand1);

          &:hover {
            background: var(--brand3);
            border: 1.5px solid var(--brand3);
          }
        `;
      case "brand-4__brand-1_2":
        return css`
          background: var(--brand4);
          border: 1.5px solid var(--brand1);
          color: var(--brand1);

          &:hover {
            background: var(--brand3);
            border: 1.5px solid var(--brand3);
          }
        `;
      case "grey-8__grey-0":
        return css`
          background: var(--grey8);
          border: 1.5px solid var(--grey8);
          color: var(--grey0);

          &:hover {
            background: var(--grey6);
            border: 1.5px solid var(--grey6);
          }
        `;
      case "transparent__grey-0_2":
        return css`
          background: none;
          border: none;
          color: var(--grey0);

          &:hover {
            background: var(--grey9);
            border: 1.5px solid var(--grey9);
          }
        `;
      case "alert-3__alert-1":
        return css`
          background: var(--alert3);
          border: 1.5px solid var(--alert3);
          color: var(--alert1);

          &:hover {
            background: var(--alert2);
            border: 1.5px solid var(--alert2);
          }
        `;
      case "alert-2__alert-1":
        return css`
          background: var(--alert2);
          border: 1.5px solid var(--alert2);
          color: var(--alert1);

          &:hover {
            background: var(--alert3);
            border: 1.5px solid var(--alert3);
          }
        `;
      case "success-3__success-1":
        return css`
          background: var(--success3);
          border: 1.5px solid var(--success3);
          color: var(--success1);

          &:hover {
            background: var(--success2);
            border: 1.5px solid var(--success2);
          }
        `;
      case "success-2__success-1":
        return css`
          background: var(--success2);
          border: 1.5px solid var(--success2);
          color: var(--success1);

          &:hover {
            background: var(--success3);
            border: 1.5px solid var(--success3);
          }
        `;
      case "brand-3__brand-4":
        return css`
          background: var(--brand3);
          border: 1.5px solid var(--brand3);
          color: var(--brand4);
        `;
      default:
        return css`
          background: var(--brand1);
          border: 1.5px solid var(--brand1);
          color: var(--whiteFixed);

          &:hover {
            background: var(--brand3);
            border: 1.5px solid var(--brand3);
          }
        `;
    }
  }}
`;

export default StyledButton;
