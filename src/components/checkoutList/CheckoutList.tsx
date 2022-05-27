import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { CheckoutProduct } from "../../components";
export const CheckoutList = () => {
  const { cart } = useAppContext();
  /*
<CheckoutProduct 
      id={3} 
      image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" 
      price={55.99} 
      title="Mens Cotton Jacket" amount={10}/>
*/
  return (
    <div className="checkout">
      <h2>Your Cart</h2>
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
