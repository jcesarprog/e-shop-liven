import React, { useState, useEffect } from "react";
import { IFakeStoreProduct } from "../interfaces/fakeStore";
import { getProducts } from "../services/fakeStore";

interface IContext {
  cart: IFakeStoreProduct[];
  addToCart: (product: IFakeStoreProduct) => void;
  removeFromCart: (product: IFakeStoreProduct) => void;
  setCart: (cart: IFakeStoreProduct[]) => void;
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
  
  const [cart, setCart] = useState<IFakeStoreProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IFakeStoreProduct[]>(
    []
  );

  useEffect(() => {
    getProducts().then((prods) => setProducts(prods));
  }, [products]);

  const addToCart = (product: IFakeStoreProduct) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: IFakeStoreProduct) => {
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
