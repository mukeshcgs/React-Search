
export default (state = null, action) => {
    switch (action.type) {
        case "FILTER_SELECTED":
            return action.payload;
            break;
    }
    return state
}