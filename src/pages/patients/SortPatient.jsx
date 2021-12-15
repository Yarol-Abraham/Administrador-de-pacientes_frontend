import usePatient from '../../hooks/usePatient';
import { findAll } from '../../redux/actions/patients/patientAction';

function SortPatient() {

    const { handlePatientParams, handlePatient } = usePatient({}, findAll);
    
    function handleClick(params) { handlePatientParams({ sort: params }); }

    return (
        <div className='mb-2 w-40 flex flex-row flex-wrap justify-between' >
             <button
                type='button'
                className='bg-blue-500 w-12 text-white rounded-md p-1'
                onClick={()=> handleClick('creacion')}
            >&uarr;</button>
            <button
                type='button'
                className='bg-red-500 w-12 text-white rounded-md p-1'
                onClick={()=> handleClick('-creacion')}
            >&darr;</button>
           <button
                type='button'
                className='bg-indigo-500 w-12 text-white rounded-md p-1'
                onClick={()=> handlePatient()}
            ><i className="fas fa-sync-alt"></i></button>
        </div>
    )
    
}

export default SortPatient;