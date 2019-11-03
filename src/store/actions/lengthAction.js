export const LENGTH_ACTION = (NEW_LENGTH) => {
    return (dispatch) => {
        dispatch({ type: "CHANGE_LENGTH", payload: NEW_LENGTH })
    }
}