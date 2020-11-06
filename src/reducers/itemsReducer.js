import * as actions from "../actions/actionTypes";
import items from "../components/dummyItems.js";

export default function itemsReducer(state = items, action) {
  switch (action.type) {
    case actions.SET_DATA:
      state = action.payload.items;
      return state;
    case actions.ADD_ITEM: {
      let newItem = {};
      newItem[action.payload.id] = action.payload;
      return {
        ...state,
        ...newItem,
      };
    }
    case actions.REMOVE_ITEM: {
      delete state[action.payload];
      return state;
    }
    case actions.FETCH_ITEMS:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
