import isEmpty from '../validation/is-empty';
import {SET_CURRENT_USER, USER_ROLE} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: {},
    users_role: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_ROLE:
            return {...state, users_role: action.payload};
        default:
            return state;
    }
}