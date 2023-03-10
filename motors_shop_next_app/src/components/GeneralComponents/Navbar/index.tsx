import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

import { useContext } from "react";
import { Media, MediaContextProvider } from "@/media";
import { UserContext } from "@/contexts/user/UserContext";
import { NavComponent } from "./style";

export interface INavbar {
  isAuthenticated: boolean;
}

const Navbar = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <NavComponent>
      <MobileNavbar isAuthenticated={isAuthenticated} />
      <DesktopNavbar isAuthenticated={isAuthenticated} />
    </NavComponent>
  );
};

export default Navbar;
