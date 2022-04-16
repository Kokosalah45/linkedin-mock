import { createPortal } from "react-dom";
import { useOutSideClick } from "../../hooks";
import { dismess } from "../../assets/images";
import Overlay from "../overlay/Overlay";
const Modal = ({ children, index, zIndex, field }) => {
  const { ref, isVisible, handleClick } = useOutSideClick(index);

  return createPortal(
    <>
      {isVisible && (
          <div {...field} ref={ref}>
            {children(handleClick)}
          </div>
        ) && <Overlay zIndex={zIndex} />}
    </>,
    document.getElementById("modal-outlet")
  );
};
export default Modal;
