import axios from 'axios';
import {COUNTRY_LIST, GET_ERRORS} from "./types";
import {base_url} from "../utils/Urls";

// Get All Country List
export const getAllCountryList = () => async dispatch => {
    try {
        const res = await axios.get(base_url + `api/country/all`);

        dispatch({
            type: COUNTRY_LIST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};