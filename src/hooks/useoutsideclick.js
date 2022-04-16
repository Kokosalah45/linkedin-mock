import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

const useOutSideClick = (handlerName) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch({ type: "SET_INVISIBLE", payload: handlerName });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return ref;
};

export default useOutSideClick;
