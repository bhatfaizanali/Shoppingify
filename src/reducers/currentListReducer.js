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
                state.items[action.payload].quantity = state.items[action.payload].quantity + 1;
            }
            else {
                state.items[action.payload] = {
                    quantity: 1,
                    bought: false
                }
            }
            return state;
        }
        case actions.CLEAR_CURRENT_LIST:
            return currentList;
        default:
            return state;
    }
}