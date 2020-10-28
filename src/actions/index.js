import * as actions from "./actionTypes";

export const addItem = (item) => {
  return {
    type: actions.ADD_ITEM,
    payload: item,
  };
};

export const fetchItems = () => {
  return {
    type: actions.FETCH_ITEMS,
  };
};
