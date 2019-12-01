import {COUNTRY_LIST} from "../actions/types";

const initialState = {
    countries: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case COUNTRY_LIST:
            return {
                ...state,
                countries: payload
            };
        default:
            return state;
    }
};
