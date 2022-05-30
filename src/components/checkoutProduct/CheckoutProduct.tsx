import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICartProduct } from "../../interfaces";
import { faCirclePlus, faCircleMinus, faTrashCan } from "../../icons";
import { useAppContext } from "../../contexts/AppContext";
import "./CheckoutProduct.scss";

export const CheckoutProduct = ({
  id,
  image,
  title,
  price,
  amount,
}: ICartProduct) => {
  const { deleteById, removeOneById, addOneById } = useAppContext();
  return (
    <div className="checkoutProd">
      <div className="checkoutProd__left">
        <div className="checkoutProd__left-img">
          <img src={image} alt={title} />
        </div>
        <div className="checkoutProd__left-price">
          <span>Price: ${price.toFixed(2)}</span>
        </div>
      </div>
      <div className="checkoutProd__right">
        <h3 className="checkoutProd__right-title">{title}</h3>

        <div className="checkoutProd__right-actions">
          <div
            className="checkoutProd__right-actions-minus"
            data-testid="minus-btn"
            onClick={() => removeOneById(id)}
          >
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="checkoutProd__right-actions-minus-icon"
            />
          </div>
          <div className="checkoutProd__right-actions-amount">
            <span>{amount}</span>
          </div>
          <div
            className="checkoutProd__right-actions-plus"
            data-testid="plus-btn"
            onClick={() => addOneById(id)}
          >
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="checkoutProd__right-actions-plus-icon"
            />
          </div>
          <div
            className="checkoutProd__right-actions-delete"
            data-testid="delete-btn"
            onClick={() => deleteById(id)}
          >
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
