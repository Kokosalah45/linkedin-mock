import { useSelector, useDispatch } from "react-redux";

const useToggle = (handlerName) => {
  const handlerVal = useSelector((state) => state.toggle)[handlerName];
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    e.stopPropagation();
    handlerVal
      ? dispatch({ type: "SET_INVISIBLE", payload: handlerName })
      : dispatch({ type: "SET_VISIBLE", payload: handlerName });
  };

  return { handlerVal, handleToggle };
};

export default useToggle;
