import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../contexts/AppContext";
import { faCartShopping } from "../../icons";
import "./ShoppingCart.scss";

export const ShoppingCart = () => {
  const { cart } = useAppContext();
  return (
    <div className="cart">
      <div className="cart__icon">
        <FontAwesomeIcon 
        icon={faCartShopping} 
        className="cart__icon-img" />
      </div>
      <div className="cart__circle">
        <span className="cart__circle-count">{cart.length}</span>
      </div>
    </div>
  );
};
