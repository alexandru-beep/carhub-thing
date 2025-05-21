"use client";

import SearchManufacturer from "./SearchManufacturer";

import React, { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");

  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
