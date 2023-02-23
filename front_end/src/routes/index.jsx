import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
  </Routes>
);
export default RoutesMain;
