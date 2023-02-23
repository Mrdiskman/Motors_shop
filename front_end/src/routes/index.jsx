import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AnnounceDetailPage from "../pages/viewAnnounceDetailPage/announceDetailPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Home />} />
    <Route path="/announceDetail" element={<AnnounceDetailPage />} />
  </Routes>
);
export default RoutesMain;
