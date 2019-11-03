const initState = {
    length: 16
}

export const uiReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_LENGTH":
            return {
                length: action.payload
            }
        default:
            return state;
    }
}