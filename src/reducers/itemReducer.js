import * as actions from "../actions/actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [...state, action.payload];
    case actions.FETCH_ITEMS:
      return { items: state };
    default:
      return state;
  }
}
