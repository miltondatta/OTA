import {AIRPORT_BY_IATA} from "../actions/types";

const initialState = {
    airport: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case AIRPORT_BY_IATA:
            return {
                ...state,
                airport: payload
            };
        default:
            return state;
    }
};

