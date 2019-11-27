import {PASSENGER_SAVE} from "../actions/types";

const initialState = {
    msgs: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case PASSENGER_SAVE:
            return {
                ...state,
                msgs: payload
            };
        default:
            return state;
    }
};
