import { v4 as uuid } from "uuid";

import * as actions from "../actions/actionTypes";
const currentList = {
  id: "",
  name: "",
  status: "",
  date: "",
  items: {},
};
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export default function currentListReducer(state = currentList, action) {
  switch (action.type) {
    case actions.ADD_ITEM_TO_CURRENT_LIST: {
      if (state.items.hasOwnProperty(action.payload)) {
        state.items[action.payload].quantity++;
      } else {
        state.items[action.payload] = {
          quantity: 1,
          bought: false,
        };
      }
      return state;
    }
    case actions.REMOVE_ITEM_FROM_CURRENT_LIST: {
      delete state.items[action.payload];
      return { ...state };
    }
    case actions.DECREASE_QUANTITY: {
      state.items[action.payload].quantity--;
      if (state.items[action.payload].quantity === 0) {
        delete state.items[action.payload];
      }
      return { ...state };
    }
    case actions.INCREASE_QUANTITY: {
      state.items[action.payload].quantity++;
      return { ...state };
    }
    case actions.ADD_NAME_SAVE: {
      state.id = uuid();
      state.name = action.payload;
      state.date = formatDate(Date());
      state.status = "active";
      return { ...state };
    }
    case actions.CANCEL_CURRENT_LIST: {
      state.status = "cancelled";
      return { ...state };
    }
    case actions.COMPLETE_CURRENT_LIST: {
      state.status = "completed";
      return { ...state };
    }
    case actions.COMPLETE_ITEM_IN_CURRENT_LIST: {
      state.items[action.payload].bought = state.items[action.payload].bought
        ? false
        : true;
      return { ...state };
    }

    case actions.CLEAR_CURRENT_LIST:
      state = {
        id: "",
        name: "",
        status: "",
        date: "",
        items: {},
      };
      return state;
    default:
      return state;
  }
}
