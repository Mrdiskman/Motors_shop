import { ButtonHomeStyle } from "./style";

const ButtonHome = ({ children }) => {
  return (
    <ButtonHomeStyle>
      <p>{children}</p>
    </ButtonHomeStyle>
  );
};
export default ButtonHome;
