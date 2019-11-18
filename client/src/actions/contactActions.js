import axios from 'axios';
import {CONTACT_SAVE} from "./types";

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
            type: CONTACT_SAVE,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};
