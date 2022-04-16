import React from "react";

const ExtraOptionsButton = ({ text, imgSrc }) => {
  return (
    <div>
      <button
        className={` "opacity-70 hover:opacity-100" group relative  gap-px  text-xs flex flex-col items-center p-2`}
      >
        <img src={imgSrc} alt="" />
        <div>
          <img src={imgSrc} alt="" />
          <span>{text}</span>
        </div>
      </button>
    </div>
  );
};

export default ExtraOptionsButton;
