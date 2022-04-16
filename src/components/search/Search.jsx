import React from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  return (
    <div className="flex-grow">
      <div className="flex max-w-[280px] relative bg-[#eef3f8] rounded-[4px]">
        <input
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
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
