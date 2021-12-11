// cookies
import Cookies from 'js-cookie';

// axios
import createAxios from '../../../config/axios';
import tokenAuth from '../../../config/tokenAuth';

// dispatch
import { signupDispatch, signupErrorDispatch } from './authDispatch';

//alerts
import { showAlert, hideAlert } from '../../../utils/alerts';

// loading
import { hideLoading, showLoading } from '../../../utils/loading';

export function signup(data) // crear cuenta de usuario
{
    return async (dispatch) =>{
        try { 
            // cargando...          
            showLoading();

            // esperar respuesta del servidor
            const response = await createAxios.post(`/user/signup`, data);
            
            // eliminar cargando...
            hideLoading();

            // respuesta obtenida del servidor 🟢🟢🟢
            const { data: { user }, token } = response.data;
            dispatch( signupDispatch({ user, token }) );
        } catch (error) {
            // eliminar cargando...
            hideLoading();

            // obtener los posibles errores 
            let err;

            // si no hay internet / o no hay conexión con el servidor
            if(error.message === 'Network Error') return showAlert(
                'error', 'Lo sentimos, Ha ocurrido un error al conectarse al servidor'
            );
            
            // obtener el error del servidor si existe
            if(error.response) err = error.response.data;
            if(err.message) err = JSON.parse(err.message);

            // enviar una alerta al usuario 💥💥💥
            dispatch( signupErrorDispatch(err) );
            
        }
    }
}

export function login(data) // loguear usuario
{
    return async (dispatch) =>{
        try {
            console.log("login: ", data);
        } catch (error) {
            
        }
    }
}

export function auth() // verificar si existe autenticación
{
    return async (dispatch) =>{
        try {
            console.log(Cookies.get('jwt'));
        } catch (error) {
            
        }
    }
}