import * as actions from "../actions/actionTypes";

export default function itemsReducer(state = {}, action) {
  switch (action.type) {
    case actions.SET_DATA:
      state = action.payload.items;
      return state;
    case actions.CREATE_ITEM:
      let newItem = {};
      newItem[action.payload.item.item.id] = action.payload.item.item;
      return {
        ...state,
        ...newItem,
      };
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
