import axios from 'axios';
import {AIRPORT_BY_IATA, GET_ERRORS} from "./types";

// Get AirPort Data By iata Code
export const getAirportByIataCode = queryData => async dispatch => {
    try {
        const res = await axios.get('api/global/get/airport/by/iata-code?iata_code=' + queryData);

        dispatch({
            type: AIRPORT_BY_IATA,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
