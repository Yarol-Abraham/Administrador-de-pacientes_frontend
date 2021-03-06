import Cookies from 'js-cookie';
import {
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    UPDATE_PASSWORD_SUCCESS
} from '../types/auth';

import {
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
} from '../types/user';

const initialState = {
    user: null, 
    errors: [],
    message: "",
    status: '', // sucess / error / fail
    token: null
}

const sendToken = (token)=>{
    Cookies.set('jwt', token, { 
        expires: new Date( Date.now() + import.meta.env.VITE_EXPIRE_IN * 24 * 60 * 60 * 1000 )
    });
};

const removeToken = ()=> { Cookies.remove('jwt'); }

function authReducer(state = initialState, action){

    switch (action.type) {
        
        case UPDATE_USER_ERROR:
        case SIGNUP_USER_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        
        case UPDATE_PASSWORD_SUCCESS:
        case LOGIN_USER_SUCCESS:
        case SIGNUP_USER_SUCCESS:
            sendToken(action.payload.token)
            return {
                ...state,
                user: action.payload.user,
                status: 'success',
                errors: [],
            }
   
        case LOGOUT_USER_SUCCESS:
            removeToken()
            return{
                ...state,
                user: action.payload.user,
                status: action.payload.status,
                errors:action.payload.errors,
                message: action.payload.message
            }
        
        case UPDATE_USER_SUCCESS:
        case AUTH_USER_SUCCESS:
            return{
                ...state,
                user: action.payload.user,
                status: action.payload.status
            }
        
        case AUTH_USER_ERROR:
            removeToken();
            return{
                ...state,
                user: null,
                message: action.payload.message,
                status: action.payload.status
            }

        default:
            return state;
    }

}

export default authReducer;