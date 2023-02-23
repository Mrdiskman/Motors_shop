
/* import BackGround from './components/backgroundComponent/background'; */
import AnnounceDetailPage from './pages/viewAnnounceDetailPage/announceDetailPage';
import { GlobalStyle } from "./style/Global";
import "./reset.css"
import RoutesMain from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <RoutesMain />

    </div>
  );
}
export default App;
