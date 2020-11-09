import * as actions from "./actionTypes";
import * as API from "../service";

// export const fetchLists = () => {
//   return {
//     type: actions.FETCH_LISTS,
//   };
// };
export const fetchLists = () => {
  let lists = {};
  let items = {};
  return function (dispatch) {
    API.getLists().then((response) => {
      response.data.forEach((list) => {
        list.ListItem.forEach((item) => {
          items[item.item_id] = {
            qty: item.qty,
            bought: item.bought,
          };
        });
        lists[list.list_id] = {
          id: list.list_id,
          name: list.list_name,
          status: list.list_status,
          date: list.list_date.slice(0, 10),
          items,
        };
        items = {};
      });

      dispatch({
        type: actions.FETCH_LISTS,
        payload: { lists },
      });
    });
  };
};
// export const addItem = (item) => {
//   return {
//     type: actions.ADD_ITEM,
//     payload: item,
//   };
// };

// export const addItemToCategories = (id, category) => {
//   return {
//     type: actions.ADD_ITEM_TO_CATEGORIES,
//     payload: { id, category },
//   };
// };

// export const addList = (list) => {
//   return {
//     type: actions.ADD_LIST,
//     payload: list,
//   };
// };

export const addList = (list) => {
  API.createList(list).then((response) => {
    console.log(response);
  });
  return {
    type: actions.ADD_LIST,
    payload: list,
  };
};

export const addItem = (
  item_name,
  item_note = "",
  imgURL = "",
  category_id,
  category_name = "",
) => {
  return function (dispatch) {
    API.createItem(item_name, item_note, imgURL, category_id, category_name)
      .then((response) => {
        let category = {};
        category["category_id"] = response.data.category_id;
        category["category_name"] = response.data.category_name;
        category["item_id"] = response.data.item_id;
        let item = {};
        item["item"] = {
          id: response.data.item_id,
          name: response.data.item_name,
          note: response.data.item_note,
          imgUrl: response.data.imgURL,
          category_id: response.data.category_id,
          category: response.data.category_name,
        };
        dispatch({
          type: actions.CREATE_ITEM,
          payload: { category, item },
        });
      })
      .catch((error) => {
        dispatch({
          type: error,
          payload: error,
        });
      });
  };
};

// export const fetchItems = () => {
//   return {
//     type: actions.FETCH_ITEMS,
//   };
// };

export const setCategoryItems = () => {
  return function (dispatch) {
    API.getItems()
      .then((response) => {
        let categories = {};
        Object.entries(response.data).forEach((category) => {
          let temp = [];
          category[1].Item.forEach((item) => {
            temp.push(item.item_id);
          });
          categories[category[0]] = {
            items: temp,
            category_name: category[1].category_name,
          };
        });
        let items = {};
        Object.entries(response.data).forEach((category) => {
          category[1].Item.forEach((item) => {
            items[item.item_id] = {
              id: item.item_id,
              name: item.item_name,
              note: item.item_note,
              imgUrl: item.imgURL,
              category_id: item.category_id,
              category: category[1].category_name,
            };
          });
        });
        dispatch({
          type: actions.SET_DATA,
          payload: { categories, items },
        });
      })
      .catch((error) => {
        dispatch({
          type: error,
          payload: error,
        });
      });
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

export const cancelCurrentList = (id) => {
  return {
    type: actions.CANCEL_CURRENT_LIST,
  };
};

export const completeCurrentList = (id) => {
  return {
    type: actions.COMPLETE_CURRENT_LIST,
  };
};

export const clearCurrentList = () => {
  return {
    type: actions.CLEAR_CURRENT_LIST,
  };
};

export const completeItemInCurrentList = (id) => {
  return {
    type: actions.COMPLETE_ITEM_IN_CURRENT_LIST,
    payload: id,
  };
};
