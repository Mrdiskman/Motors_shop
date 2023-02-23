import { GlobalStyle } from "./style/Global";
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

      <GlobalStyle />
      <RoutesMain />

    </div>
  );
}
export default App;
