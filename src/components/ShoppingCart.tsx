import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "../icons";
import "./ShoppingCart.scss";
export const ShoppingCart = () => {
  return (
    <div className="cart">
      <div className="cart__icon">
        <FontAwesomeIcon icon={faCartShopping} className="cart__icon-img" />
      </div>
      <div className="cart__circle">
        <span className="cart__circle-count">10</span>
      </div>
    </div>
  );
};
