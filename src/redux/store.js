import { createStore, combineReducers } from "redux";
import toggleReducer from "./reducers/toggle";

const store = createStore(
  combineReducers({
    toggle: toggleReducer,
  })
);

export default store;
