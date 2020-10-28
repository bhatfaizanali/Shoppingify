const ADD = 'ADD ITEM';

function add(item) {
    return {
        type: ADD,
        payload: item
    }
}

export { add }