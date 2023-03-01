import { ButtonHomeStyle } from "./styled";

const ReddirectionButton = ({ children, link }: any) => {
  const anchorLink = () => {
    window.location.href = `#${link}`;
  };
  return (
    <ButtonHomeStyle onClick={anchorLink}>
      <p>{children}</p>
    </ButtonHomeStyle>
  );
};
export default ReddirectionButton;
