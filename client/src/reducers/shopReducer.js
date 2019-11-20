import {SHOP_API} from "../actions/types";

const initialState = {
    shopData: []
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SHOP_API:
            return {
                ...state,
                shopData: payload
            };
        default:
            return state;
    }
};