import React from "react";
import { useOutSideClick } from "../../hooks";
import { useSelector } from "react-redux";
import Overlay from "../overlay/Overlay";
import { AnimatePresence } from "framer-motion";
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
      {handlerVal && isOverlay && <Overlay isOffset={true} />}
    </>
  );
};

export default DropDown;
