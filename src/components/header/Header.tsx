import { ShoppingCart } from "../../components";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="router__link">
        <h1 className="header__title">E-Shop</h1>
      </Link>
      <div className="header__company-img">
        <img src="logo-livern.webp" alt="" />
      </div>
      <div className="header__cart">
        <Link to="/checkout" className="router__link">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
};
