import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AnnounceDetailPage from "../pages/viewAnnounceDetailPage/announceDetailPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/announceDetail" element={<AnnounceDetailPage />} />
  </Routes>
);
export default RoutesMain;
