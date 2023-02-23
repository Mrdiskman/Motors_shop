import RoutesMain from "./routes";
import ContextsProvider from "./contexts/provider";

function App() {
  return (
    <div className="App">
      <ContextsProvider>
        <RoutesMain />
      </ContextsProvider>
    </div>
  );
}
export default App;
