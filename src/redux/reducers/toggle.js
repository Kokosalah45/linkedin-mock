const initialState = {};
const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VISIBLE":
      return { ...state, [action.payload]: true };
    case "SET_INVISIBLE":
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
};

export default toggleReducer;
