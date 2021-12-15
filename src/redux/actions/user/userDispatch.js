import {

    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,

    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR

} from '../../types/user';

// actualizar usuario
export const updateUser = (data) =>({
    type: UPDATE_USER_SUCCESS,
    payload: data
})

export const updateErrorUser = (data) =>({
    type: UPDATE_USER_ERROR,
    payload: data
})

// actualizar contraseña
export const updatePassword = (data) =>({
    type: UPDATE_PASSWORD_SUCCESS,
    payload: data
})

export const updateErrorPassword = (data) =>({
    type: UPDATE_PASSWORD_ERROR,
    payload: data
})