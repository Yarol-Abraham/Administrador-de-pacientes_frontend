import { Link } from 'react-router-dom';
import Modal from './modalPatient';
import DeletePatient from './DeletePatient';

function ListPatients() {

    return (
      <div className="p-2 mt-2 w-full md:h-4/5 overflow-auto">
        <h2>Listado de pacientes</h2>
        <table className="table-auto border w-full">
          <thead>
            <tr>
              <th className="border" >Nombre</th>
              <th className="border" >Descripcion</th>
              <th className="border" >Sintomas</th>
              <th className="border" >Acciones</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td className="border p-1 text-sm">Lorem ipsum dolor sit amet consectetur.</td>
              <td className="border p-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam possimus minus maiores voluptate optio temporibus eos harum molestias aut.</td>
              <td className="border p-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, commodi!</td>
              <td className="border p-1">
                <div className="flex flex-row">
                  <Modal />
                  <Link 
                    to={"/pacientes/editar/21"}
                    className="w-10 p-2 md:p-1 text-white bg-indigo-400 text-center" 
                  ><i className="fas fa-edit"></i></Link>
                  <DeletePatient />
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    )
    
}
  
export default ListPatients