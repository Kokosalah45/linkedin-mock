import React from "react";
import { useEffect } from "react";
const Overlay = ({ zIndex }) => {
  const zIndx = `z-[${zIndex}]`;
  return (
    <div className={`h-screen w-full fixed opacity-40 bg-black ${zIndx}`}></div>
  );
};

export default Overlay;
