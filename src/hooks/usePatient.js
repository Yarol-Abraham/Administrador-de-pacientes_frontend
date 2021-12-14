import { useDispatch, useSelector } from 'react-redux';

import { resetState } from '../redux/actions/patients/patientAction';

function usePatient (data = {}, fn){
    
    const dispatch = useDispatch();
    const patient = useSelector( state => state.patient );
  
    // ejecuta la funcion del action: exclusivamente para datos de formulario
    function handlePatient(){ if(typeof fn === 'function') dispatch( fn(data) ); }

    // ejecuta la funcion del action: exclusitamente para parametros de url (sort, page, limit)
    function handlePatientParams(params) { if(typeof fn === 'function') dispatch( fn(params) ); }
    
    // si se requier restablecer los valores de reducer: status y errors
    function handleReset() { if(typeof fn === 'function') dispatch( resetState() );  }

    return {
        handlePatient,
        handleReset,
        handlePatientParams,
        patient
    }
}

export default usePatient;