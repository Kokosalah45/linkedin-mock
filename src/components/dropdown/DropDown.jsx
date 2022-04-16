import React from "react";
import { useOutSideClick } from "../../hooks";
const DropDown = ({ index }) => {
  const { ref, isVisible } = useOutSideClick(index);
  return <>{isVisible && <div ref={ref}>DropDown</div>}</>;
};

export default DropDown;
