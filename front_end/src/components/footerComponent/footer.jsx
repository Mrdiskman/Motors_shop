import { FooterComponent } from "./footerStyledComponent";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <FooterComponent>
      <h1 className="titleFooter">
        Motors <span className="spanTitleFooter">shop</span>
      </h1>
      <p className="rigths">© 2022 - Todos os direitos reservados.</p>
      <button className="upPage">
        <IoIosArrowUp />
      </button>
    </FooterComponent>
  );
};
export default Footer;
