import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SearchInput = ({ searchValue }) => {
  const [search, setSearch] = useState();
  const HandlerChange = async (e) => {
    e.preventDefault();
    await setSearch(e.target.value);
  };

  const HandlerClick = async (e) => {
    e.preventDefault();
    await searchValue(search);
  };
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      HandlerClick();
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="What are you looking for..."
        value={search}
        onChange={HandlerChange}
        onKeyDown={onEnter}
        className=" ml-[400px] block w-[50%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={HandlerClick}
        className=" mr-[520px] text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchInput;
