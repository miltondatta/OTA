import {PROFILE_UPDATE} from "../actions/types";

const initialState = {
    msg: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case PROFILE_UPDATE:
            return {
                ...state,
                msg: payload
            };
        default:
            return state;
    }
};