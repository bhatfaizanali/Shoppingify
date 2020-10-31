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

export const removeItem = (id) => {
  return {
    type: actions.REMOVE_ITEM,
    payload: id,
  };
};

export const addItemToCurrentList = (id) => {
  return {
    type: actions.ADD_ITEM_TO_CURRENT_LIST,
    payload: id,
  };
};
export const removeItemFromCategories = (id, name) => {
  return {
    type: actions.DELETE_ITEM_FROM_CATEGORIES,
    payload: { id, name },
  };
};

export const fetchLists = () => {
  return {
    type: actions.FETCH_LISTS,
  };
};
