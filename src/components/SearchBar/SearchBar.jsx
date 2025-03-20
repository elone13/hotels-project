import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
      <select className="search-select">
        <option value="boutique">Boutique</option>
        <option value="boutique">Boutique</option>
        <option value="boutique">Boutique</option>
      </select>
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
