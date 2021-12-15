import {
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
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