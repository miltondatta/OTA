import axios from 'axios';
import {SHOP_API, GET_ERRORS} from "./types";
import { shopApi } from '../utils/Urls';

// Save Contact User Data
export const shopData = (userInput, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(shopApi, userInput, config);

        dispatch({
            type: SHOP_API,
            payload: res.data
        });
        if(res.data) history.push('/flight-list');
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
