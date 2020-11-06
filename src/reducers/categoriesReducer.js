import * as actions from "../actions/actionTypes";

export default function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case actions.SET_DATA:
      state = action.payload.categories;
      return state;
    case actions.CREATE_ITEM:
      console.log(state);
      state[action.payload.category.category_id] = state[
        action.payload.category.category_id
      ].items = [
        ...state[action.payload.category.category_id].items,
        action.payload.category.item_id,
      ];
      return { ...state };
    case actions.FETCH_CATEGORIES:
      return state;
    case actions.DELETE_ITEM_FROM_CATEGORIES: {
      const filteredItems = state[action.payload.name].filter(
        (id) => id !== action.payload.id,
      );
      if (filteredItems.length === 0) {
        delete state[action.payload.name];
        return { ...state };
      } else {
        const category = {};
        category[action.payload.name] = filteredItems;
        return { ...state, ...category };
      }
    }
    case actions.ADD_ITEM_TO_CATEGORIES: {
      state[action.payload.category] = [
        ...state[action.payload.category],
        action.payload.id,
      ];
      return { ...state };
    }
    default:
      return state;
  }
}
