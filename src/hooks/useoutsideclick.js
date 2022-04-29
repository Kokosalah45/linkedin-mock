import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInVisible } from "../redux/slices/toggleSlice";

const useOutSideClick = (handlerName, reducer) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch(setInVisible(handlerName));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return ref;
};

export default useOutSideClick;
