import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

import { useContext } from "react";
import { Media, MediaContextProvider } from "@/media";
import { UserContext } from "@/contexts/user/UserContext";

export interface INavbar {
  isAuthenticated: boolean;
}

const Navbar = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <MediaContextProvider>
      <Media lessThan="sm">
        <MobileNavbar isAuthenticated={isAuthenticated} />
      </Media>
      <Media greaterThanOrEqual="sm">
        <DesktopNavbar isAuthenticated={isAuthenticated} />
      </Media>
    </MediaContextProvider>
  );
};

export default Navbar;
