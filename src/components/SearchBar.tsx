import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import "./SearchBar.scss";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { products } = useAppContext();

  const handleSearch = () => {
    console.log(products);
    
    if (!search) return;

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredProducts);

    return filteredProducts;
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__term"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={(e) => {
          if (e.code === "Enter") handleSearch();
        }}
      />
      <button type="submit" className="search__btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
