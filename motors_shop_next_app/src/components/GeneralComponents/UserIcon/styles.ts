import styled from "styled-components";

interface IStyledUserIcon {
  auction?: boolean;
}

export const StyledUserIcon = styled.div<IStyledUserIcon>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 15px;

  span {
    font: var(--body-2-500);

    color: ${(props) => (props.auction ? "var(--whiteFixed)" : "var(--grey2)")};

    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: var(--grey4);
      transition: 0.5s;
    }
  }
`;

export const Icon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font: var(--body-2-500);
  color: var(--whiteFixed);

  width: 32px;
  height: 32px;

  margin-right: 10px;

  border-radius: 150px;
  background: var(--brand2);

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: var(--brand3);
    transition: 0.5s;
  }
`;
