/* import BackGround from './components/backgroundComponent/background'; */
import Header from "./components/headerComponent/header";
import Login from "./pages/Login/Login";
import BuildVehicleCard from "./components/vehicleCardComponent/vehicleCard";
import Register from "./pages/Register/Register";
import { GlobalStyle } from "./style/Global";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Login />
      {/* <Register /> */}
      {/* <BuildVehicleCard /> */}
      {/* <BackGround/> */}
    </div>
  );
}

export default App;
