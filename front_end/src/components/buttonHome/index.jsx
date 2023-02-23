import { ButtonHomeStyle } from "./style";

const ButtonHome = ({ children, link }) => {
  const anchorLink = () => {
    window.location.href = `#${link}`;
  };
  return (
    <ButtonHomeStyle onClick={anchorLink}>
      <p>{children}</p>
    </ButtonHomeStyle>
  );
};
export default ButtonHome;
