import * as actions from "../actions/actionTypes";
import lists from "../components/dummyLists.js";

export default function listsReducer(state = lists, action) {
  switch (action.type) {
    case actions.FETCH_LISTS:
      return state;
    default:
      return state;
  }
}