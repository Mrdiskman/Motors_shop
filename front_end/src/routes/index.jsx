import { Route, Routes } from "react-router-dom";
import AnnouncerDashboard from "../pages/AnnouncerDashboard/AnnouncerDashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AnnounceDetailPage from "../pages/viewAnnounceDetailPage/announceDetailPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Home />} />
    <Route path="/announceDetail" element={<AnnounceDetailPage />} />
    <Route path="/announcerDashboard" element={<AnnouncerDashboard />} />
    <Route path="/userDashboard" element={<UserDashboard />} />
  </Routes>
);
export default RoutesMain;
