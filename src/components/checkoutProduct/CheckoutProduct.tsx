import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICartProduct } from "../../interfaces";
import { faCirclePlus, faCircleMinus, faTrashCan } from "../../icons";
import "./CheckoutProduct.scss"

export const CheckoutProduct = ({
  id,
  image,
  title,
  price,
  amount,
}: ICartProduct) => {
  return (
    <div className="checkoutProd">
      <div className="checkoutProd__left">
        <div className="checkoutProd__left-img">
          <img src={image} alt={title} />
        </div>
        <div className="checkoutProd__left-price">
          <span>Price: ${(price).toFixed(2)}</span>
        </div>
      </div>
      <div className="checkoutProd__right">
        <h3 className="checkoutProd__right-title">{title}</h3>

        <div className="checkoutProd__right-actions">
          <div className="checkoutProd__right-actions-minus">
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="checkoutProd__right-actions-minus-icon"
            />
          </div>
          <div className="checkoutProd__right-actions-amount">
            <span>{amount}</span>
          </div>
          <div className="checkoutProd__right-actions-plus">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="checkoutProd__right-actions-plus-icon"
            />
          </div>
          <div className="checkoutProd__right-actions-delete">
            <FontAwesomeIcon
              icon={faTrashCan}
              className="checkoutProd__right-actions-delete-icon"
            />
          </div>
        </div>
        <div className="checkoutProd__right-total">
          <span>Subtotal: ${(amount * price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
