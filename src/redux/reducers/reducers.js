import { combineReducers } from "redux";

// reducers
import authReducer from "./authReducer";
import patientReducer from "./patientReducer";

export default combineReducers({
    auth: authReducer,
    patient: patientReducer
});