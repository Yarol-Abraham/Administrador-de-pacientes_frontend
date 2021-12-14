import { Link } from 'react-router-dom';

function OptionsPatient() {

    return (
      <>
        <div className="p-2 w-full md:w-1/5 flex flex-col md:flex-row flex-wrap md:items-end">
            <Link 
              className="h-10 bg-indigo-400
              mb-2 md:mb-0 mx-2 p-2 
              rounded text-white text-center"
              to={"/pacientes/nuevo"}
            >
              Crear Paciente <i className="fas fa-plus"></i> 
            </Link>
        </div>
      </>
    )
    
}
  
export default OptionsPatient;