import { useAppContext } from "../../contexts/AppContext";
import { CheckoutProduct } from "../../components";

import "./CheckoutList.scss"

export const CheckoutList = () => {
  const { cart, total } = useAppContext();
  
  return (
    <div className="checkout">
      <div className="checkout__title-total">
      <h2>Your Cart</h2>
      <span>Total: ${total}</span>
      </div>
      
      {cart.map((product) => (
        <CheckoutProduct
          key={product.id}
          id={product.id}
          image={product.image}
          price={product.price}
          title={product.title}
          amount={product.amount}
        />
      ))}
    </div>
  );
};
