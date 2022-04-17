import React from "react";
import { useOutSideClick } from "../../hooks";
import { useSelector } from "react-redux";
const DropDown = ({ handlerName, children, ...field }) => {
  const handlerVal = useSelector((state) => state.toggle)[handlerName];
  const ref = useOutSideClick(handlerName);

  return (
    <>
      {handlerVal && (
        <div {...field} ref={ref}>
          {children}
        </div>
      )}
    </>
  );
};

export default DropDown;
