import { ShoppingCart } from "../components";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">E-Shop</h1>
      <div className="header__company-img">
        <img src="logo-livern.webp" alt="" />
      </div>
      <div className="header__cart">
        <ShoppingCart />
      </div>
    </header>
  );
};
