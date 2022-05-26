import "./App.scss";
import { Header, SearchBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
