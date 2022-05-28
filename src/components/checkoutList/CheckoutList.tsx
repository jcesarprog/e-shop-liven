import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import { CheckoutProduct } from "../../components";

import "./CheckoutList.scss";

export const CheckoutList = () => {
  const { cart, total, setCart } = useAppContext();

  return (
    <div className="checkout">
      <div className="checkout__title">
        <h2>Your Cart</h2>
        <div className="checkout__total-order">
          <span>Total: ${total.toFixed(2)}</span>
          <Link to="/order" className="router__link">
            <button className="checkout__cta" onClick={() => setCart([])}>
              Finish Order
            </button>
          </Link>
        </div>
      </div>

      {cart.length > 0 ? (
        cart.map((product) => (
          <CheckoutProduct
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
            amount={product.amount}
          />
        ))
      ) : (
        <h2>Your cart is empty!</h2>
      )}
    </div>
  );
};
