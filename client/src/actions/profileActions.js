import axios from 'axios';
import {GET_ERRORS, PROFILE_UPDATE, SET_CURRENT_USER} from "./types";
import jwt_decode from 'jwt-decode';
import setAuthToken from "../utils/setAuthToken";

// Update Profile
export const updateProfile = (updateProfileData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post('api/users/profile/update', JSON.stringify(updateProfileData), config);

        const {token} = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);

        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        });

        dispatch({
            type: PROFILE_UPDATE,
            payload: {profile_update_msg: "Profile Updated Successfully!"}
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

// Update Password
export const updatePassword = (updatePasswordData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post('api/users/password/update', JSON.stringify(updatePasswordData), config);
        dispatch({
            type: PROFILE_UPDATE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};


// Empty Profile Update Message
export const emptyMessage = () => dispatch => {
    dispatch({
        type: PROFILE_UPDATE,
        payload: {}
    })
};