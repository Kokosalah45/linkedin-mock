import { useSelector, useDispatch } from "react-redux";
import {
  setVisible,
  setInVisible,
  closeAll,
} from "../redux/slices/toggleSlice";
const useToggle = (handlerName) => {
  const handlerVal = useSelector((state) => state.toggle)[handlerName];
  const dispatch = useDispatch();

  const handleToggle = (e, reducer, forceAction = null) => {
    e.stopPropagation();

    const action = forceAction || handlerVal;
    if (action) {
      dispatch(setInVisible(handlerName));
    } else {
      dispatch(closeAll());
      dispatch(setVisible(handlerName));
    }
  };

  return { handlerVal, handleToggle };
};

export default useToggle;
