import {PASSENGER_SAVE, USER_FLIGHT_SEARCH} from "../actions/types";

const initialState = {
    msgs: {},
    user_flight_search: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case PASSENGER_SAVE:
            return {...state, msgs: payload};
        case USER_FLIGHT_SEARCH:
            return {...state, user_flight_search: payload};
        default:
            return state;
    }
};
