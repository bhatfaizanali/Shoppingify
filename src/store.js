import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'

import itemsReducer from './reducers/itemsReducer.js';
import currentListReducer from './reducers/currentListReducer.js';

const store = createStore(combineReducers({
    items: itemsReducer,
    currentList: currentListReducer
}), compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);

export default store;