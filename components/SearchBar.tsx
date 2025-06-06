"use client";

import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";

import React, { useState } from "react";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManuFacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      (searchManufacturer === "" && searchModel === "") ||
      (searchManufacturer.trim() === "" && searchModel.trim() === "")
    ) {
      return alert("Please fill in the search bar");
    }

    setManufacturer(searchManufacturer.toLowerCase());
    setModel(searchModel.toLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManuFacturer}
        />
        {/* fixed position of this annoying search button */}
        <SearchButton otherClasses="sm:hidden ml-auto" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
