import React from "react";
import { down } from "../../assets/images";
import { useToggle } from "../../hooks";
const ExtraOptionsButton = ({ text, imgSrc, handlerName }) => {
  const { handleToggle } = useToggle(handlerName);
  return (
    <div>
      <button
        className={` capitalize opacity-70 hover:opacity-100 group relative  gap-[2px]  text-xs flex flex-col items-center p-2`}
        onClick={handleToggle}
      >
        <img className="h-6 w-6" src={imgSrc} alt="" />
        <div className="flex items-center gap-1">
          <span>{text}</span>
          <img className="h-3 w-3" src={down} alt="" />
        </div>
      </button>
    </div>
  );
};

export default ExtraOptionsButton;
