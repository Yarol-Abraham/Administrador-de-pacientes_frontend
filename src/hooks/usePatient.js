import { useDispatch, useSelector } from 'react-redux';

import { resetState } from '../redux/actions/patients/patientAction';

function usePatient (data = {}, fn){
    
    const dispatch = useDispatch();
    const patient = useSelector( state => state.patient );
  
    function handlePatient(){ if(typeof fn === 'function') dispatch( fn(data) ); }
    
    function handleReset() { if(typeof fn === 'function') dispatch( resetState() );  }

    return {
        handlePatient,
        handleReset,
        patient
    }
}

export default usePatient;