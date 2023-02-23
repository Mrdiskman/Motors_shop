/* import BackGround from './components/backgroundComponent/background'; */
/* import AnnounceDetailPage from './pages/viewAnnounceDetailPage/announceDetailPage'; */
import { GlobalStyle } from "./style/Global";
import "./reset.css";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import ContextsProvider from "./contexts/provider";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ContextsProvider>
        <RoutesMain />
      </ContextsProvider>
    </div>
  );
}
export default App;
