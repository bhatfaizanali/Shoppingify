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

export const removeItem = (item) => {
  return {
    type: actions.REMOVE_ITEM,
    payload: item,
  };
};

export const addItemToCurrentList = (id) => {
  return {
    type: actions.ADD_ITEM_TO_CURRENT_LIST,
    payload: id,
  };
};

export const removeItemFromCurrentList = (id) => {
  return {
    type: actions.REMOVE_ITEM_FROM_CURRENT_LIST,
    payload: id,
  };
};

export const removeItemFromCategories = (id, name) => {
  return {
    type: actions.DELETE_ITEM_FROM_CATEGORIES,
    payload: { id, name },
  };
};

export const addItemToCategories = (id, category) => {
  return {
    type: actions.ADD_ITEM_TO_CATEGORIES,
    payload: { id, category },
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: actions.DECREASE_QUANTITY,
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: actions.INCREASE_QUANTITY,
    payload: id,
  };
};

export const addNameSave = (name) => {
  return {
    type: actions.ADD_NAME_SAVE,
    payload: name,
  };
};

export const fetchLists = () => {
  return {
    type: actions.FETCH_LISTS,
  };
};
