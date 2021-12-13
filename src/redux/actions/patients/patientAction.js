// axios
import createAxios from '../../../config/axios';

// dispatch
import {
    createPatient,
    createErrorPatient,

    listPatients,
    listErrorPatients,

    resetInitialState
} from './patientDispatch';

//alerts
import { showAlert } from '../../../utils/alerts';

// loading
import { hideLoading, showLoading } from '../../../utils/loading';

const formatData = function(data) 
{
    const object = { ...data };
    object.telefono = Number(object.telefono);
    if(object.sintomas.includes(',')){
        let arr = object.sintomas.split(',');
        let newArr = arr.filter( el => el.trim() !== '' );
       object.sintomas = newArr;
    }
    return object;
}

export function create(dataForm) 
{
    return async (dispatch)=>{
        try {
            // cargando...
            showLoading();

            // esperar respuesta del servidor
            const newData = formatData(dataForm);
            const response = await createAxios.post('/patients/create', newData);
            
            // eliminar cargando
            hideLoading();

            // respuesta obtenida del servidor 🟢🟢🟢
            const { data, status } = response.data;
            dispatch( createPatient({ data, status  }) );

            // mostrar alerta
            showAlert('success', "Se ha creado correctamente el registro");

            // restablecer el status
           setTimeout(() => {
            dispatch(resetInitialState({ status: '' }) );
           }, 100);

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
            if(!err.message) return showAlert(
                'error', 'Lo sentimos, Ha ocurrido un error al conectarse al servidor'
            );
            err = JSON.parse(err.message);
            // enviar los errores al usuario 💥💥💥
            dispatch( createErrorPatient(err) );
        }  
    }
}

export function findAll() 
{
    return async (dispatch) =>{
        try {
            // cargando...
            showLoading();

            // esperar respuesta del servidor
            const response = await createAxios.get('/patients/all');
            
            // eliminar cargando
            hideLoading();

            // respuesta obtenida del servidor 🟢🟢🟢
            const { data, status } = response.data;
            dispatch( listPatients({ data, status }) );
            
            // restablecer el status
            setTimeout(() => {
                dispatch(resetInitialState({ status: '' }) );
            }, 100);

        } catch (error) {

            // eliminar cargando...
            hideLoading();

            // obtener los posibles errores 
            let err = "Lo sentimos, ha ocurrido un error al cargar la pagina 😥";

            // si no hay internet / o no hay conexión con el servidor
            if(error.message === 'Network Error') return showAlert(
                'error', 'Lo sentimos, Ha ocurrido un error al conectarse al servidor'
            );
            
            // mostrar alerta de error al usuario 💥💥💥
            showAlert('error', err);
        }
    }
}