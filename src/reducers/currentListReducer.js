import * as actions from "../actions/actionTypes";
const currentList = {
    id: "",
    name: "",
    status: "",
    date: "",
    items: {}
}

export default function currentListReducer(state = currentList, action) {
    switch (action.type) {
        case actions.ADD_ITEM_TO_CURRENT_LIST: {
            if (state.items.hasOwnProperty(action.payload)) {
                state.items[action.payload].quantity++;
            }
            else {
                state.items[action.payload] = {
                    quantity: 1,
                    bought: false
                }
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
            return { ...state }
        }
        case actions.INCREASE_QUANTITY: {
            state.items[action.payload].quantity++;
            return { ...state }
        }
        case actions.CLEAR_CURRENT_LIST:
            return currentList;
        default:
            return state;
    }
}