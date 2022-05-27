import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFakeStoreProduct } from "../../interfaces/fakeStore";
import { faPlus } from "../../icons";

import "./Product.scss";

type ProductItem = Pick<IFakeStoreProduct, "image" | "title" | "price">;
export const Product = ({ image, title, price }: ProductItem) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt="" />
      </div>
      <p className="product__title">{title}</p>
      <div className="product__price_btn-container">
        <span className="product__price">${price}</span>
        <button className="product__btn-addToCart">
          <span className="product__btn-addToCart-text">Add to cart</span>
          <FontAwesomeIcon
            icon={faPlus}
            className="product__btn-addToCart-icon-img"
          />
        </button>
      </div>
    </div>
  );
};
