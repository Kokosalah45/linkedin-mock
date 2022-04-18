import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const isVisitedLink = (pathName, to) => {
  return pathName === to
    ? ["opacity-100", "scale-100"]
    : ["opacity-70 hover:opacity-100", "scale-0"];
};

const CustomNavLink = ({ imgSrcActive, imgSrcNotActive, alt, text, to }) => {
  const currentLocation = useLocation();
  const match = to === currentLocation.pathname;
  const imgSrc = match ? imgSrcActive : imgSrcNotActive;
  const [opacity, border] = isVisitedLink(currentLocation.pathname, to);

  return (
    <Link
      className={`${opacity} group relative  gap-px  text-xs flex flex-col items-center p-2`}
      to={to}
    >
      <img className=" h-6 w-6" src={imgSrc} alt={alt} />
      <p className="capitalize">{text}</p>
      <span
        className={`${border} duration-200 absolute rounded h-[2px] w-full -bottom-px transition-all ease-in-out bg-black `}
      ></span>
    </Link>
  );
};

CustomNavLink.propTypes = {};

export default CustomNavLink;
