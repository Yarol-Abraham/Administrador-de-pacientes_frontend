import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import usePatient from '../../hooks/usePatient';
import { getId, update } from '../../redux/actions/patients/patientAction';

function EditPatient() {

  const [ data, setData ] = useState(null);
  
  let navigate = useNavigate();

  const { handlePatient, handleReset, patient } = usePatient(data, update);
  useEffect(() => { setData(patient.patient); }, [patient.patient])
  
  const handleChange = function(e){
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  
  const handleForm = function(e) {
    e.preventDefault();
    handlePatient();
  }

  const handleClick = function() {
    handleReset();
    navigate('/pacientes', { replace: true });
  }

  return (
    <GetPatient >
      {
        data ? (
          <form 
            className="p-2 flex flex-col w-full md:w-3/4"
            onSubmit={handleForm}
          >
            <h1 className="text-center mb-4 uppercase font-bold">{`Editar Paciente - ${data.nombres} ${data.apellidos}`}</h1>
            <label htmlFor="Nombre">Nombres</label>
            <input 
              name='nombres'
              onChange={handleChange}
              value={data.nombres}
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />
            
            { 
              patient.errors.map(err => err.name === 'nombres' ? (
                <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
              ): null)
            }

            <label htmlFor="Apellidos">Apellidos</label>
            <input
              name='apellidos'
              onChange={handleChange}
              value={data.apellidos} 
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />

              { 
                patient.errors.map(err => err.name === 'apellidos' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

            <label htmlFor="Telefono">Telefono</label>
            <input
              name='telefono'
              onChange={handleChange}
              value={data.telefono}
              type="number" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />

              { 
                patient.errors.map(err => err.name === 'telefono' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

            <label htmlFor="Direccion">Dirección</label>
            <input
              name='direccion'
              onChange={handleChange}
              value={data.direccion}
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />

              { 
                patient.errors.map(err => err.name === 'direccion' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

            <label htmlFor="Ocupacion">Ocupación</label>
            <input
              name='ocupacion'
              onChange={handleChange}
              value={data.ocupacion}
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />

              { 
                patient.errors.map(err => err.name === 'ocupacion' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

            <label htmlFor="Sintomas">Sintomas (agregue una coma para ir separando cada sintoma)</label>
            <input
              name='sintomas'
              onChange={handleChange}
              value={data.sintomas}
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />

            <label className="font-light" htmlFor="Descripcion">Descripción</label>
            <textarea 
              name="descripcion"
              onChange={handleChange}
              value={data.descripcion}
              cols="30" 
              rows="10"
              className="border border-gray-300"
            ></textarea>

            { 
              patient.errors.map(err => err.name === 'descripcion' ? (
                <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
              ): null)
            }

            <label htmlFor="Fecha">Fecha de registro</label>
            <input
                name='fecha'
                type="date"
                onChange={handleChange}
                value={data.fecha}
                className="my-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />

            { 
              patient.errors.map(err => err.name === 'fecha' ? (
                <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
              ): null)
            }

            <div className="flex flex-col sm:flex-row mt-4">
              <button 
                type="submit" 
                className="w-full mb-2 sm:mb-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
              Guardar
              </button>

              <button 
                type='button'
                onClick={handleClick}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
              Regresar
              </button>
            </div>
          </form>
        ) : null
      }
    </GetPatient>
  )   
}

function GetPatient({ children }) {
  
  let navigate = useNavigate();
  let params = useParams();
  
  const { handlePatient } = usePatient({id: params.id}, getId);
  useEffect(() => { 
    if(!params.id) return navigate("/pacientes", { replace: true }) ;
    handlePatient();
  }, [])

  return children;
}

export default EditPatient;

