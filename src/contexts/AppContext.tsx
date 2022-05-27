import React, { useState, useEffect } from "react";
import { IFakeStoreProduct, ICartProduct } from "../interfaces";
import { getProducts } from "../services/fakeStore";

interface IContext {
  cart: ICartProduct[];
  addToCart: (product: Omit<ICartProduct, "amount">) => void;
  removeFromCart: (product: ICartProduct) => void;
  setCart: (cart: ICartProduct[]) => void;
  products: IFakeStoreProduct[];
  filteredProducts: IFakeStoreProduct[];
  setFilteredProducts: (filteredProducts: IFakeStoreProduct[]) => void;
}

// ! since the fake api has only 20 items
// ! we can store the products to being able to filter and search

const AppContext = React.createContext({} as IContext);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState<IFakeStoreProduct[]>([]);

  const [cart, setCart] = useState<ICartProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IFakeStoreProduct[]>(
    []
  );

  useEffect(() => {
    getProducts().then((prods) => setProducts(prods));
  }, []);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  const addToCart = (product: Omit<ICartProduct, "amount">) => {
    const newCart = [...cart];
    const productInCart = newCart.find((item) => item.id === product.id);

    if (productInCart) productInCart.amount += 1;
    else newCart.push({ ...product, amount: 1 });

    setCart(newCart);
  };

  const removeFromCart = (product: ICartProduct) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setCart,
        products,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
