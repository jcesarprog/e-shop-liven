import React, { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import "./SearchBar.scss";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { products, setFilteredProducts } = useAppContext();

  const handleSearch = () => {
    if (!search) setFilteredProducts(products);

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
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
