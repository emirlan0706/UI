import React, { useContext } from "react";
import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Search: "${searchValue}"` : "Все кроссовки"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}

          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.includes(searchValue))
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
