import {CONTACT_SAVE} from "../actions/types";

const initialState = {
    msgs: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_SAVE:
            return {
                ...state,
                msgs: action.payload
            };
        default:
            return state;
    }
};