import {
    CREATE_PATIENT_SUCCESS,
    CREATE_PATIENT_ERROR,

    LIST_PATIENT_SUCCESS,
    LIST_PATIENT_ERROR,

    DELETE_PATIENT_SUCCESS,

    RESET_INITIAL_STATE
} from '../../types/patients';

// crear paciente
export const createPatient = (data)=>({
    type: CREATE_PATIENT_SUCCESS,
    payload: data
});

export const createErrorPatient = (data)=>({
    type: CREATE_PATIENT_ERROR,
    payload: data
})

// listado de pacientes
export const listPatients = (data) =>({
    type: LIST_PATIENT_SUCCESS,
    payload: data
})

export const listErrorPatients = (data) =>({
    type:LIST_PATIENT_ERROR,
    payload: data
})

// eliminar un paciente
export const deletePatient = (data) =>({
    type:DELETE_PATIENT_SUCCESS,
    payload: data
})

// restablecer el status del estado
export const resetInitialState = (data)=>({
    type: RESET_INITIAL_STATE,
    payload: data
});