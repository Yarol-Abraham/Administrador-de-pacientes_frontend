import Cookies from 'js-cookie';
import {
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR
} from '../types/auth';

const initialState = {
    user: null, 
    errors: [],
    status: '', // sucess / error / fail
}

const sendToken = (token)=>{
    Cookies.set('jwt', token, { 
        expires: new Date( Date.now() + import.meta.env.VITE_EXPIRE_IN * 24 * 60 * 60 * 1000 )
    });
};

const removeToken = ()=> { Cookies.remove('jwt'); }

function authReducer(state = initialState, action){

    switch (action.type) {
        
        case SIGNUP_USER_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        
        case LOGIN_USER_SUCCESS:
        case SIGNUP_USER_SUCCESS:
            sendToken(action.payload.token)
            return {
                ...state,
                user: action.payload.user,
                status: 'success'
            }

        default:
            return state;
    }

}

export default authReducer;