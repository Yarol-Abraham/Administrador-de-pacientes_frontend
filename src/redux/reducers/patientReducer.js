import {
    CREATE_PATIENT_SUCCESS,
    CREATE_PATIENT_ERROR,

    UPDATE_PATIENT_SUCCESS,
    UPDATE_PATIENT_ERROR,

    LIST_PATIENT_SUCCESS,
    LIST_PATIENT_ERROR,

    GET_PATIENT_SUCCESS,
    GET_PATIENT_ERROR,

    DELETE_PATIENT_SUCCESS,

    RESET_INITIAL_STATE
} from '../types/patients';

const initialState = {
    patient: null,
    patients: [],
    results: 0,
    errors: [],
    status: '', // success / error 0 fail
    message: ''
}

function patientReducer(state = initialState, action) {
    
    switch (action.type) {
        
        case UPDATE_PATIENT_ERROR:
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
        
        case UPDATE_PATIENT_SUCCESS:
            return{
                ...state,
                status: action.payload.status
            }
            
        case LIST_PATIENT_SUCCESS:
            return{
                ...state,
                patients: action.payload.data,
                results: action.payload.results,
                status: action.payload.status
            }
        
        case GET_PATIENT_SUCCESS:
            return{
                ...state,
                patient: action.payload.data,
                status: action.payload.status
            }
        
        case GET_PATIENT_ERROR:
            return{
                ...state,
                patient: action.payload.data,
                status: action.payload.status
            }

        case DELETE_PATIENT_SUCCESS:
            return{
                ...state,
                patients: [ ...state.patients.filter( el => el._id !== action.payload._id ) ]
            }

        case LIST_PATIENT_ERROR:
            return{
                ...state,
                patient: action.payload.patient,
                patients: action.payload.patients,
                errors: action.payload.errors,
                status: action.payload.status, // success / error 0 fail
                message: action.payload.message
            }
        
        case RESET_INITIAL_STATE:
            return {
                ...state,
                status: action.payload.status,
                errors: []
            }

        default:
            return state;
    }

}

export default patientReducer;