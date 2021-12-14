// axios
import createAxios from '../../../config/axios';

// dispatch
import {
    createPatient,
    createErrorPatient,

    updatePatient,
    updateErrorPatient,

    listPatients,
    listErrorPatients,

    getPatient,
    getErrorPatient,

    deletePatient,

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
    if(object._id) delete object['_id'];
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

export function update(dataForm)
{
    return async (dispatch) =>{
        try {
            // cargando...
            showLoading();

            // esperar respuesta del servidor
            const newData = formatData(dataForm); 
            const response = await createAxios.patch(`/patients/update/${dataForm._id}`, newData);

            // eliminar cargando
            hideLoading();

            // respuesta obtenida del servidor 🟢🟢🟢
            const { data, status } = response.data;
            dispatch( updatePatient({ data, status  }) );

            // mostrar alerta
            showAlert('success', "Se ha actualizado correctamente el registro");

            // restablecer el status
            setTimeout(() => {
            dispatch( resetInitialState({ status: '' }) );
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
            dispatch( updateErrorPatient(err) );
        }
    }
}

export function findAll(params = {}) 
{
    return async (dispatch) =>{
        try {
            // cargando...
            showLoading();
            
            // formatear la url si existe parametros

            let url = "/patients/all";
            if(Object.values(params).length > 0 ) url = `/patients/all?${params.buscar}=${params.valor}`; 
            
            // esperar respuesta del servidor
            const response = await createAxios.get(url);
            
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

            // restablecer todos los valores
            dispatch( listErrorPatients({
                    patient: null,
                    patients: [],
                    errors: [],
                    status: '', 
                    message: ''
                }) 
            );
        }
    }
}

export function getId(patient)
{
    return async (dispatch) =>{
        try {
            // cargando...
            showLoading();

            // esperar respuesta del servidor
             const response = await createAxios.get(`/patients/get/${patient.id}`);
             
            // eliminar cargando
            hideLoading();
            
            // respuesta obtenida del servidor 🟢🟢🟢
            const { data, status } = response.data;
            dispatch( getPatient({ data, status }) );
            
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
            dispatch( getErrorPatient({ data: null, status: '' }) );
        }
    }
}

export function deleteId(data) 
{
    return async (dispatch)=> {
        try{
            // cargando...
            showLoading();

            // esperar respuesta del servidor 
            await createAxios.delete(`/patients/delete/${data._id}`);
                        
            // eliminar cargando
            hideLoading();

            // respuesta obtenida del servidor 🟢🟢🟢
            dispatch( deletePatient({ _id: data._id }) );

            // mostrar mensaje de alerta al usuario
            showAlert('success', 'Registro eliminado correctamente');

        }catch(error){
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

export function resetState() 
{
    return (dispatch)=>{
        dispatch( resetInitialState({ status: '' }) );
    }
}