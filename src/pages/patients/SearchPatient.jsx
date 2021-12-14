import { useState } from 'react';

import usePatient from '../../hooks/usePatient';
import { findAll } from '../../redux/actions/patients/patientAction';

function SearchPatient() {

  const [ data, setData ] = useState({
    buscar: "nombres",
    valor: ""
  });

  const { handlePatient } = usePatient(data, findAll);
 
  const handleChange = function(e) {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const handleForm = function(e) {
      e.preventDefault();
      handlePatient();
  }

  return (
    <>
      <form 
        className=" p-2 w-full md:w-4/5 flex flex-col md:flex-row justify-between items-end"
        onSubmit={handleForm}
      >
        <div className=" mb-3 md:mb-0 w-full md:w-2/5">
          <label htmlFor="Buscar">Buscar paciente</label>
          <input 
            name='valor'
            onChange={handleChange}
            type="text" 
            className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
          focus:border-gray-500 focus:bg-white focus:ring-0" />
        </div>
        <div className=" mb-3 md:mb-0 w-full md:w-2/5">
          <label htmlFor="Buscar">Buscar por</label>
          <select 
            name="buscar"
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0"
          >
            <option value="nombres">Nombres</option>
            <option value="apellidos">Apellidos</option>
            <option value="telefono">Telefono</option>
            <option value="direccion">Direccion</option>
            <option value="ocupacion">Ocupación</option>
          </select>
        </div>
        <button 
          type="submit"
          className="bg-blue-400 p-2 w-full md:w-1/6 md:h-10 rounded-md text-white"
        ><i className="fas fa-search"></i></button>
      </form>
    </>
  )
}

export default SearchPatient