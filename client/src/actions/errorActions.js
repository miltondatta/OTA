import {GET_ERRORS} from "./types";

// Empty Errors
export const emptyError = () => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: {}
    })
};