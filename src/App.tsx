import { Header } from "./components";
import { Home, Checkout, Order } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
