import {combineReducers} from "redux";
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import contactReducer from "./contactReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    contact: contactReducer,
    profile: profileReducer
}); 
