import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import itemsReducer from "./reducers/itemsReducer.js";
import currentListReducer from "./reducers/currentListReducer.js";
import categories from "./reducers/categoriesReducer";
import lists from "./reducers/listsReducer";

const store = createStore(
  combineReducers({
    items: itemsReducer,
    currentList: currentListReducer,
    categories,
    lists,
  }),
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
