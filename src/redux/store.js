import { createStore, combineReducers } from "redux";
import formReducer from "./formReducer";
import listReducer from "./listReducer";
import stateReducer from "./stateReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  formReducer,
  listReducer,
  stateReducer,
  searchReducer,
});

const store = createStore(rootReducer);

export default store;
