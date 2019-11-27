import axios from 'axios';
import {PASSENGER_SAVE, GET_ERRORS} from "./types";

// Save Each Passenger Information
export const savePassengerInfo = (passengerInfo, showMessage) => async dispatch => {
    try {
        if (showMessage) {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const res = await axios.post(`api/passenger/store`, passengerInfo, config);

            dispatch({
                type: PASSENGER_SAVE,
                payload: res.data
            });
        }

        if (!showMessage) {
            dispatch({
                type: PASSENGER_SAVE,
                payload: {}
            });
        }
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};