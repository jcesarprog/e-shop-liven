import { Header,Product } from "./components";
import { Home, Checkout, Order } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

/**
 
 title: "Mens Cotton Jacket" 
image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
price: 55.99

 
 */

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Product image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" price={55.99} title="Mens Cotton Jacket"  />
      </div>
    </div>
  );
}

export default App;
