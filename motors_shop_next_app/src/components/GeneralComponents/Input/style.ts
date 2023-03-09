import styled from "styled-components";

interface IProps {
  size: "small" | "big";
}

export const Label = styled.label<IProps>`
  width: 100%;
  margin-bottom: 24px;

  font: var(--input-label);
  color: var(--grey1);

  input {
    width: 100%;

    margin-top: 8px;
    padding: 0px 16px;

    border: 1.5px solid #e9ecef;
    border-radius: 4px;

    font: var(--input-placeholder);
    color: var(--grey1);

    min-height: ${({ size }) =>
    size === "small"
      ? `
       45px
       `
      : `
       90px
       `};

    :focus {
      outline: none !important;
      border: 1px solid #5126ea;
    }

    :hover {
      transition: 0.5s all ease-in-out;
      background: #f1f3f5;
    }

    ::placeholder {
      font: var(--input-placeholder);
      color: var(--grey3);
    }
  }
`;
