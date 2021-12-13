import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Modal from './modalPatient';
import DeletePatient from './DeletePatient';

import usePatient from '../../hooks/usePatient';
import { findAll } from '../../redux/actions/patients/patientAction';

function ListPatients() {

  const { handlePatient, patient } = usePatient({}, findAll);
  useEffect(()=>{ handlePatient(); },[]);

  return (
    <div className="p-2 mt-2 w-full md:h-4/5 overflow-auto">
      <h2 className='mb-4 font-semibold'>Listado de pacientes</h2>
      {
        patient.patients.length > 0 ? (
          <table className="table-auto border w-full">
            <thead>
              <tr>
                <th className="border" >Nombre</th>
                <th className="border" >Descripcion</th>
                <th className="border" >Telefono</th>
                <th className="border" >Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                patient.patients.map(el => (
                  <tr key={el._id}>
                    <td className="border p-1 text-sm">{el.nombres + " " + el.apellidos}</td>
                    <td className="border p-1 text-sm">{el.descripcion}</td>
                    <td className="border p-1 text-sm">{el.telefono}</td>
                    <td className="border p-1">
                      <div className="flex flex-row items-center justify-center">
                        <Modal patient={el} />
                        <Link 
                          to={`/pacientes/editar/${el._id}`}
                          className="w-10 p-2 md:p-1 text-white bg-indigo-400 text-center" 
                        ><i className="fas fa-edit"></i></Link>
                        <DeletePatient />
                      </div>
                    </td>
                  </tr>
                ))
              }
              
            </tbody>
          </table>
        ): 
        <div role="alert">
            <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
              Alerta
            </div>
            <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
              <p>Aquí apareceran tus pacientes agregados ✔✔✔</p>
            </div>
        </div>
      }
    </div>
  )
    
}
  
export default ListPatients