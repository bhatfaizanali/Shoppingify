import * as actions from "../actions/actionTypes";
import categories from "../components/dummyCategories.js";

export default function categoriesReducer(state = categories, action) {
    switch (action.type) {
        case actions.FETCH_CATEGORIES:
            return state;
        case actions.DELETE_ITEM_FROM_CATEGORIES: {
            const filteredItems = state[action.payload.name].filter(id => id !== action.payload.id);
            if (filteredItems.length === 0) {
                delete state[action.payload.name];
                return { ...state };
            } else {
                const category = {};
                category[action.payload.name] = filteredItems;
                return { ...state, ...category };
            }
        }
        default:
            return state;
    }
}
