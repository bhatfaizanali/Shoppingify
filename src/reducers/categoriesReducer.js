import * as actions from "../actions/actionTypes";
import categories from "../components/dummyCategories.js";

export default function categoriesReducer(state = categories, action) {
  switch (action.type) {
    case actions.FETCH_CATEGORIES:
      return state;
    case actions.DELETE_ITEM_FROM_CATEGORIES: {
      console.log(action.payload.name, "  ", action.payload.id);
      break;
    }
    default:
      return state;
  }
}
