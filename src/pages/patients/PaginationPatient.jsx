
import { useState, useEffect } from 'react';
import usePatient from '../../hooks/usePatient';
import { findAll } from '../../redux/actions/patients/patientAction';

function PaginationPatient() {

    const [ elements, setElements ] = useState([]);
    const [ page, setPage ] = useState(0);
    const { handlePatientParams, patient } = usePatient({}, findAll);

    useEffect(()=>{
        let elements = [];
        for(let i=1; i<=patient.results; i++){ elements.push(i); };
        setElements(elements);
    },[patient.results]);

    function handleClick(params) { 
        handlePatientParams({ page: params }); 
        setPage(params);
    }
 
    return(
        <div>
            <button 
            disabled={ page === patient.results ? true : false }
                type="button"
                className={`border px-4 py-1 ${ page === patient.results ? 'bg-blue-100' : 'bg-blue-500' } text-white`}
                onClick={()=> handleClick(page + 1) }
            ><i className="fas fa-angle-right"></i></button>
            {
                elements.length > 0 ? 
                    elements.map(el =>(
                        <button 
                            key={el}
                            type="button"
                            onClick={()=> handleClick(el) }
                            className="border px-4 py-1 bg-white text-black font-bold"
                        >
                        {el}
                        </button>
                    ))
                : null
            }            
            <button
                disabled={ page === 0 ? true : false } 
                type="button"
                onClick={()=> handleClick(page - 1) }
                className={`border px-4 py-1 ${ page === 0 ? 'bg-blue-100' : 'bg-blue-500' } text-white`}
            ><i className="fas fa-angle-left"></i></button>
        </div>
    )

}

export default PaginationPatient;