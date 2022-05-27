import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { Product } from "../../components";
import { IFakeStoreProduct } from "../../interfaces/fakeStore";

import "./ProductSearchList.scss";

export const ProductSearchList = () => {
  const { products, filteredProducts } = useAppContext();

  const renderProduct = (product: IFakeStoreProduct) => {
    return( <Product
      key={product.id}
      image={product.image}
      price={product.price}
      title={product.title} id={product.id}  />)
  }

  const renderProducts = () => {
    if (filteredProducts.length) {
      return filteredProducts.map((prod) => renderProduct(prod))
    } else {
      return products.map((prod) => renderProduct(prod))
    }
  };

  
  return <div className="productList">{renderProducts()}</div>;
};
