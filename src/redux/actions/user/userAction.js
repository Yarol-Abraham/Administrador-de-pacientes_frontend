// axios
import createAxios from '../../../config/axios';

// dispatch
import { 
    updateUser,
    updateErrorUser,

    updatePassword,
    updateErrorPassword

} from './userDispatch';

//alerts
import { showAlert } from '../../../utils/alerts';

// loading
import { hideLoading, showLoading } from '../../../utils/loading';

function filterData(data) {
    let obj = { ...data };
    let exclusiveFields = [ 'password', 'passwordConfirm', '__v', '_id' ];
    exclusiveFields.forEach(el => delete obj[el] );
    return obj;
}

export function updateMe(dataForm) {
    return async (dispatch)=>{
        try {
            // cargando...          
            showLoading();

            // esperar respuesta del servidor
            const newData = filterData(dataForm);
            const response = await createAxios.patch(`/user/updateMe`, newData);
            
            // eliminar cargando...
            hideLoading();

            // respuesta obtenida del servidor 🟢🟢🟢
            const { data, status } = response.data;
            dispatch( updateUser({ user: data, status }) );

            // mostrar alerta
            showAlert('success', "Se ha actualizado correctamente el registro");

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
            dispatch( updateErrorUser(err) );
        }
    }
}

export function updatePass(data) {
    return async ()=>{

    }
}
