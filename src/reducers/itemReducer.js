import * as actions from "../actions/actionTypes";

export default function (state = {}, action) {
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
