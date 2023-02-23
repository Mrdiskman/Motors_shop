
/* import BackGround from './components/backgroundComponent/background'; */
import AnnounceDetailPage from './pages/viewAnnounceDetailPage/announceDetailPage';
import { GlobalStyle } from "./style/Global"; 
import RoutesMain from "./routes";
import Header from './components/headerComponent/header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain />
    </div>
  );
}
export default App;
