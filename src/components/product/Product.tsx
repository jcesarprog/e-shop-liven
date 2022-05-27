import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFakeStoreProduct } from "../../interfaces/fakeStore";
import { faPlus } from "../../icons";
import { useAppContext } from "../../contexts/AppContext";
import "./Product.scss";

type ProductItem = Pick<IFakeStoreProduct, "image" | "title" | "price" | "id">;
export const Product = ({ image, title, price, id }: ProductItem) => {
  const { addToCart } = useAppContext();
  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt="" />
      </div>
      <p className="product__title">{title}</p>
      <div className="product__price_btn-container">
        <span className="product__price">${price}</span>
        <button
          onClick={() => addToCart({ image, title, price, id })}
          className="product__btn-addToCart"
        >
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
