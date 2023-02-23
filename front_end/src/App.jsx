
/* import BackGround from './components/backgroundComponent/background'; */
import AnnounceDetailPage from './pages/viewAnnounceDetailPage/announceDetailPage';
import Footer from './components/footerComponent/footer';
import Header from "./components/headerComponent/header";
import Login from "./pages/Login/Login";
import BuildVehicleCard from "./components/vehicleCardComponent/vehicleCard";
import Register from "./pages/Register/Register";
import { GlobalStyle } from "./style/Global";
import "./reset.css"
import RoutesMain from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/*<Login /> */}
      {/* <Register /> */}
      {/* <BuildVehicleCard /> */}
      {/* <BackGround/> */}
      <RoutesMain />

    </div>
  );
}
export default App;
