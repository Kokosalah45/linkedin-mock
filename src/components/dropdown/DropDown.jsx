import React from "react";
import { useOutSideClick } from "../../hooks";
import { useSelector } from "react-redux";
import Overlay from "../overlay/Overlay";
const DropDown = ({
  handlerName,
  children,
  isOverlay = false,
  zIndex = 30,
  ...field
}) => {
  const handlerVal = useSelector((state) => state.toggle)[handlerName];
  const ref = useOutSideClick(handlerName);

  return (
    <>
      {handlerVal && (
        <div {...field} ref={ref}>
          {children}
        </div>
      )}
      {handlerVal && isOverlay && <Overlay zIndex={zIndex} />}
    </>
  );
};

export default DropDown;
