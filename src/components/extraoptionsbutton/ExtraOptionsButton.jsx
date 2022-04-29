import React from "react";
import { down } from "../../assets/images";
import { useToggle } from "../../hooks";
const ExtraOptionsButton = ({ text = "", imgSrc, handlerName }) => {
  const { handleToggle } = useToggle(handlerName);
  return (
    <div>
      <button
        className={` capitalize h-[57px] justify-center opacity-70 hover:opacity-100 group relative  gap-1  text-xs flex flex-col items-center p-2`}
        onClick={handleToggle}
      >
        <img className="h-6 w-6" src={imgSrc} alt="" />
        <div className="flex items-center gap-1">
          <span className=" hidden lg:block">{text}</span>
          <img className="h-3 w-3 hidden lg:block" src={down} alt="" />
        </div>
      </button>
    </div>
  );
};

export default ExtraOptionsButton;
