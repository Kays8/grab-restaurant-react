import React from "react";
import { useState, useEffect } from "react";

const Search = ({ restaurants, setFilteredRestaurants }) => {
  //สร้าง useState เป็นค่าว่าง
  const [keyword, setKeyword] = useState("");

  //สร้างช่องเพื่อค้นหา keyword
  const handleChange = async (e) => {
    setKeyword(e.target.value);

    //เช็คว่า ถ้าช่อง Search เป็นค่าว่างให้แสดงหน้ารวมของ restaurants
    if (e.target.value === "") {
      setFilteredRestaurants(restaurants);
      return;
    }

    ////
    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
        restaurant.type.toLocaleLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFilteredRestaurants(result);
  };

  return (
    <div className="card items-center">
      <label className="input input-bordered flex gap-2 bg-white bg-slate-200 p-2 w-96">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 12"
          fill="currentColor"
          className="w-5 h-5 opacity-70 "
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default Search;
