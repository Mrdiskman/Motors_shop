import { HeaderContext } from "@/contexts/header/HeaderContext";
import { useContext } from "react";
import { UserdataStyle } from "./styles";

const userData = () => {
  const {
    toggleDeskTop
  } = useContext(HeaderContext);
  return (
    <>
      <UserdataStyle onClick={()=> toggleDeskTop()}>
        <div className="containerNameAbreviation">
          <p className="nameAbreviation">PS</p>
        </div>
        <p className="userName">Pedro Sandes</p>
      </UserdataStyle>
    </>
  );
};
export default userData;
