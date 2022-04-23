import React from "react";
import { useEffect, useState } from "react";

import { useToggle } from "../../hooks";
import DropDown from "../dropdown/DropDown";
const Search = () => {
  //search-tab
  const { handlerVal, handleToggle } = useToggle("search-results");
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1024);
  const toggleSearchTab = (e) => {
    if (window.innerWidth >= 1024) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", toggleSearchTab);

    return () => {
      window.removeEventListener("resize", toggleSearchTab);
    };
  }, []);

  return (
    <div className=" flex-grow-0 lg:flex-grow ">
      <div
        className={`flex max-w-[280px] ${
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
    </div>
  );
};

Search.propTypes = {};

export default Search;
