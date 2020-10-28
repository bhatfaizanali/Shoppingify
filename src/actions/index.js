import * as actions from "./actionTypes";

export const fetchItems = () => {
  return function (dispatch) {
    dispatch({
      type: actions.FETCH_ITEMS,
    });
  };
};
