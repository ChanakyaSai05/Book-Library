import { combineReducers } from "redux";
import searchReducer from "./search";
import cartReducer from "./cart";
import counterReducer from "./counter";

const allReducers = combineReducers({
  search: searchReducer,
  cart: cartReducer,
  counter: counterReducer,
});
export default allReducers;
