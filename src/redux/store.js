import { createStore, combineReducers } from "redux";
import toggleReducer from "./reducers/toggle";

const store = createStore(
  combineReducers({
    globalClick: toggleReducer,
  })
);

export default store;
