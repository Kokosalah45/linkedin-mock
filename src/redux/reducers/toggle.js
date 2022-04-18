const initialState = {
  "me-dropdown": false,
  "work-modal": false,
};
const toggleReducer = (state = initialState, action) => {
  console.log(state, "before");

  switch (action.type) {
    case "SET_VISIBLE":
      Object.keys(initialState).forEach((key) => (state[key] = false));
      return { ...state, [action.payload]: true };
    case "SET_INVISIBLE":
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
};

export default toggleReducer;
