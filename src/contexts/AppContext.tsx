import React, { useState, useEffect } from "react";
import { IFakeStoreProduct, ICartProduct } from "../interfaces";
import { getProducts } from "../services/fakeStore";

interface IContext {
  products: IFakeStoreProduct[];
  filteredProducts: IFakeStoreProduct[];
  setFilteredProducts: (filteredProducts: IFakeStoreProduct[]) => void;
  cart: ICartProduct[];
  addToCart: (product: Omit<ICartProduct, "amount">) => void;
  setCart: (cart: ICartProduct[]) => void;
  deleteById: (id: number) => void;
  removeOneById: (id: number) => void;
  addOneById: (id: number) => void;
  total: number;
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
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getProducts().then((prods) => setProducts(prods));
  }, []);

  useEffect(() => {
    getTotal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const getTotal = () =>
    setTotal(
      +cart.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)
    );

  const addToCart = (product: Omit<ICartProduct, "amount">) => {
    const newCart = [...cart];
    const productInCart = newCart.find((item) => item.id === product.id);

    if (productInCart) productInCart.amount += 1;
    else newCart.push({ ...product, amount: 1 });

    setCart(newCart);
    getTotal();
  };

  const deleteById = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
    getTotal();
  };

  const removeOneById = (id: number) => {
    const newCart = [...cart];
    const productInCartIdx = newCart.findIndex((item) => item.id === id);
    newCart[productInCartIdx].amount -= 1;
    if (newCart[productInCartIdx].amount <= 0) deleteById(id);
    else setCart(newCart);
    getTotal();
  };

  const addOneById = (id: number) => {
    const newCart = [...cart];
    const productInCart = newCart.find((item) => item.id === id);
    if (productInCart) productInCart.amount += 1;
    setCart(newCart);
    getTotal();
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteById,
        removeOneById,
        addOneById,
        products,
        filteredProducts,
        setFilteredProducts,
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
