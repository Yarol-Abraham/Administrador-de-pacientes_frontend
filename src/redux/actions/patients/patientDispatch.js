import {
    CREATE_PATIENT_SUCCESS,
    CREATE_PATIENT_ERROR,

    LIST_PATIENT_SUCCESS,
    LIST_PATIENT_ERROR,

    RESET_INITIAL_STATE
} from '../../types/patients';

export const createPatient = (data)=>({
    type: CREATE_PATIENT_SUCCESS,
    payload: data
});

export const createErrorPatient = (data)=>({
    type: CREATE_PATIENT_ERROR,
    payload: data
})

export const listPatients = (data) =>({
    type: LIST_PATIENT_SUCCESS,
    payload: data
})

export const listErrorPatients = (data) =>({
    type:LIST_PATIENT_ERROR,
    payload: data
})

export const resetInitialState = (data)=>({
    type: RESET_INITIAL_STATE,
    payload: data
});