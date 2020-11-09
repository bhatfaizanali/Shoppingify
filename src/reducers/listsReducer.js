import * as actions from "../actions/actionTypes";

export default function listsReducer(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_LISTS:
      state = action.payload.lists;
      return state;
    case actions.ADD_LIST:
      state[action.payload.id] = action.payload;
      return { ...state };
    default:
      return state;
  }
}
