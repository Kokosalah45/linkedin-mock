import { useSelector, useDispatch } from "react-redux";

const useToggle = (handlerName) => {
  const handlerVal = useSelector((state) => state[handlerName]);
  const dispatch = useDispatch();
  const handleToggle = () => {
    handlerVal
      ? dispatch({ type: "SET_INVISIBLE", payload: handlerName })
      : dispatch({ type: "SET_VISIBLE", payload: handlerName });
  };

  return handleToggle;
};
