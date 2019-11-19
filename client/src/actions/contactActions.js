import axios from 'axios';
import {CONTACT_SAVE, GET_ERRORS} from "./types";

// Save Contact User Data
export const contactUserData = (newContact) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post(`api/contact/store`, newContact, config);

        dispatch({
            type: CONTACT_SAVE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
