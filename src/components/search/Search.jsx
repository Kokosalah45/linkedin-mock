import React from "react";
import { useEffect, useState, useRef } from "react";
import { search } from "../../assets/images";

import { useToggle } from "../../hooks";
import DropDown from "../dropdown/DropDown";
const Search = () => {
  //search-tab
  const ref = useRef();
  const { handlerVal, handleToggle } = useToggle("search-results");
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1024);
  const toggleSearchTab = (e) => {
    if (window.innerWidth >= 1024) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const detectClickOutside = (e) => {
    if (e.target && e.target !== ref.current && window.innerWidth < 1024) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", toggleSearchTab);
    document.addEventListener("click", detectClickOutside);

    return () => {
      window.removeEventListener("resize", toggleSearchTab);
      document.addEventListener("click", detectClickOutside);
    };
  }, []);

  return (
    <div className=" flex-grow-0 lg:flex-grow ">
      <div
        className={`max-w-[280px] ${
          isVisible && handlerVal && "max-w-[350px]"
        } transition-all duration-300 relative bg-[#eef3f8] rounded-[4px] ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <input
          onClick={handleToggle}
          type="text"
          placeholder="Search"
          className=" appearance-none outline-none border-none w-full bg-transparent pl-10 pr-2 py-0 h-[34px] text-sm focus:ring-0"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" pointer-events-none h-[1rem] w-[1rem] font-bold absolute left-4 top-[9px] text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <DropDown
          handlerName={"search-results"}
          className="absolute bg-white rounded-md shadow-md shadow-gray-600 h-28 z-[60]  w-[350px] top-8 mt-2 p-5 flex items-center justify-center"
        >
          <div>koko2</div>
        </DropDown>
      </div>
      <button
        ref={ref}
        onClick={() => setIsVisible((prev) => !prev)}
        className={`${
          !isVisible ? "block" : "hidden"
        } capitalize h-[57px] justify-center opacity-70 hover:opacity-100 group relative  gap-[2px] mx-2 sm:mx-4 text-xs flex flex-col items-center p-2`}
      >
        <img className="max-w-none h-6 w-6" src={search} alt={"search"} />
        <p className="capitalize hidden md:block ">search</p>
      </button>
    </div>
  );
};

Search.propTypes = {};

export default Search;
