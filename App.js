import Home from "./Components/Home.js";
import DataProvider from "./context/DataProvider.jsx";
function App() {
  return (
    <div>
      <DataProvider>
      <Home/>
      </DataProvider>
    </div>
  );
}

export default App;
