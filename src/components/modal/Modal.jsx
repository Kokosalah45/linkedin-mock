import { createPortal } from "react-dom";
import { useOutSideClick } from "../../hooks";
import { dismess } from "../../assets/images";
import { motion } from "framer-motion";
import Overlay from "../overlay/Overlay";
import { useSelector } from "react-redux";

const Modal = ({ children, handlerName, zIndex, ...field }) => {
  const ref = useOutSideClick(handlerName);
  const handlerVal = useSelector((state) => state.toggle)[handlerName];
  return createPortal(
    <>
      {handlerVal && (
        <motion.div
          key="modal"
          initial={{ right: -300 }}
          animate={{ right: 0 }}
          exit={{ right: -300 }}
          {...field}
          ref={ref}
        >
          {children()}
        </motion.div>
      )}
      {handlerVal && <Overlay zIndex={zIndex}></Overlay>}
    </>,
    document.getElementById("modal-outlet")
  );
};
export default Modal;
