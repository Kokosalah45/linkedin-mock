import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeAll } from "../../redux/slices/toggleSlice";
const isVisitedLink = (pathName, to) => {
  return pathName === to
    ? ["opacity-100", "scale-100"]
    : ["opacity-70 hover:opacity-100", "scale-0"];
};

const CustomNavLink = ({
  imgSrcActive,
  imgSrcNotActive,
  alt,
  text,
  to,
  bottomBorder = true,
}) => {
  const dispatch = useDispatch();
  const currentLocation = useLocation();
  const match = to === currentLocation.pathname;
  const imgSrc = match ? imgSrcActive : imgSrcNotActive;
  const [opacity, border] = isVisitedLink(currentLocation.pathname, to);
  console.log({ bottomBorder });

  return (
    <Link
      className={`${opacity} group relative h-[57px] justify-center gap-px  text-xs flex flex-col items-center p-2`}
      to={to}
      onClick={() => dispatch(closeAll())}
    >
      <img className=" h-6 w-6" src={imgSrc} alt={alt} />
      <p className="capitalize hidden md:block ">{text}</p>
      {bottomBorder && (
        <span
          className={`${border}  duration-200 absolute z-10 rounded h-[2px] w-full -bottom-px transition-all ease-in-out bg-black `}
        />
      )}
    </Link>
  );
};

CustomNavLink.propTypes = {};

export default CustomNavLink;
