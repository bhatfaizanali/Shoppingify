import * as actions from "../actions/actionTypes";
import items from "../components/dummyItems.js"

export default function (state = items, action) {
  switch (action.type) {
    case actions.ADD_ITEM: {
      let newItem = {};
      newItem[action.payload.id] = action.payload;
      return {
        ...state,
        ...newItem
      }
    }
    case actions.FETCH_ITEMS:
      return { items: state };
    default:
      return state;
  }
}
