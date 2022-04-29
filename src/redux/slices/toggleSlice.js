import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "me-dropdown": false,
  "work-modal": false,
  "options-dropdown": false,
  "search-results": false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setVisible: (state, action) => {
      state[action.payload] = true;
    },
    setInVisible: (state, action) => {
      state[action.payload] = false;
    },
    closeAll: (state, action) => {
      Object.keys(state).forEach((key) => (state[key] = false));
    },
  },
});

const { setVisible, setInVisible, closeAll } = toggleSlice.actions;

export { setVisible, setInVisible, closeAll };
export default toggleSlice.reducer;
