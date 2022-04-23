import { createPortal } from "react-dom";
import { useOutSideClick, useToggle } from "../../hooks";
import { dismess } from "../../assets/images";
import { motion, AnimatePresence } from "framer-motion";
import Overlay from "../overlay/Overlay";
import { useSelector } from "react-redux";

const Modal = ({ children, handlerName, zIndex, ...props }) => {
  const ref = useOutSideClick(handlerName);
  const handlerVal = useSelector((state) => state.toggle)[handlerName];
  const {handleToggle} = useToggle(handlerName)
  return createPortal(
    <AnimatePresence>
      {handlerVal && (
        <motion.div key="modal" {...props} ref={ref}>
          {children(handleToggle)}
        </motion.div>
      )}
      {handlerVal && <Overlay zIndex={zIndex}></Overlay>}
    </AnimatePresence>,
    document.getElementById("modal-outlet")
  );
};
export default Modal;
