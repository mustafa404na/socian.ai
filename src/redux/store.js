import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import pageReducer from "./mobilePagination/pageReducer";
const store = createStore(pageReducer, composeWithDevTools());
export default store;
