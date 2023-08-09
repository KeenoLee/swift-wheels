"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="search-bar-container" onSubmit={handleSearch}>
      <div className="search-bar-item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
