import { useDispatch, useSelector } from 'react-redux';

function usePatient (data = {}, fn){
    
    const dispatch = useDispatch();
    const patient = useSelector( state => state.patient );
  
    function handlePatient(){ if(typeof fn === 'function') dispatch( fn(data) ); }
    
    return {
        handlePatient,
        patient
    }
}

export default usePatient;