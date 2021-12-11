import {
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR
} from '../../types/auth';

// crear usuario
export const signupDispatch = (data)=>({
    type: SIGNUP_USER_SUCCESS,
    payload: data
});

export const signupErrorDispatch = (data)=>({
    type: SIGNUP_USER_ERROR,
    payload: data
});

// loguear usuario
export const loginDispatch = (data)=>({
    type: LOGIN_USER_SUCCESS,
    payload: data
});

export const loginErrorDispatch = (data)=>({
    type: LOGIN_USER_ERROR,
    payload: data
});

// autenticación de usuario
export const authDispatch = (data)=>({
    type: AUTH_USER_SUCCESS,
    payload: data
});

export const authErrorDispatch = (data)=>({
    type: AUTH_USER_ERROR,
    payload: data
});