import axios from 'axios';
import {SHOP_API, GET_ERRORS, USER_FLIGHT_SEARCH} from "./types";
import {shopApi} from '../utils/Urls';

// Show shop api search Data
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

        dispatch({
            type: USER_FLIGHT_SEARCH,
            payload: userInput
        });

        if (res.data) {
            localStorage.setItem('user_flight_search', JSON.stringify(userInput));
            history.push('/flight-list')
        }
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
