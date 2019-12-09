import {SHOP_API} from "../actions/types";

const initialState = {
    shopData: [],
    loading: true
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SHOP_API:
            return {
                ...state,
                shopData: payload,
                loading: false
            };
        default:
            return state;
    }
};