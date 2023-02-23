import AnnounceDetailPage from './pages/viewAnnounceDetailPage/announceDetailPage';
import { GlobalStyle } from './style/Global';
import "./reset.css"
import Footer from './components/footerComponent/footer';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AnnounceDetailPage/>
    </div>
  );
}

export default App;
