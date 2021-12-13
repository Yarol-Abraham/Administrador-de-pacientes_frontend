import {
    CREATE_PATIENT_SUCCESS,
    CREATE_PATIENT_ERROR,
    RESET_INITIAL_STATE
} from '../types/patients';

const initialState = {
    patient: null,
    patients: [],
    errors: [],
    status: '', // success / error 0 fail
    message: ''
}

function patientReducer(state = initialState, action) {
    
    switch (action.type) {
        
        case CREATE_PATIENT_ERROR: 
            return{
                ...state,
                errors: action.payload
            }
        
        case CREATE_PATIENT_SUCCESS:
            return{
                ...state,
                patients: [ ...state.patients, action.payload.data ],
                status: action.payload.status
            }
        
        case RESET_INITIAL_STATE:
            return {
                ...state,
                status: action.payload.status
            }

        default:
            return state;
    }

}

export default patientReducer;