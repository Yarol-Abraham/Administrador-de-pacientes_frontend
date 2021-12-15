import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { updateMe } from '../../redux/actions/user/userAction';

function Account() {

  const [ data, setData ] = useState(null);

  const { handleAuth, auth } = useAuth(data, updateMe);
  useEffect(() => { setData(auth.user); }, [auth.user])

  const handleChange = function(e) {
    setData({...data, [e.target.name]: e.target.value });
  }

  const handleForm = function(e) {
    e.preventDefault();
    handleAuth();
  }

  return (
    <>
    {
        data ? (
      <form 
        className="p-2 flex flex-col w-full md:w-3/4"
        onSubmit={handleForm}
      >
          <h1 className="text-center mb-4 uppercase font-bold">Mi Cuenta</h1>
            <label htmlFor="Nombre">Nombres</label>
            <input
              name='nombre'
              onChange={handleChange}
              value={data.nombre}
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />
            
            { 
              auth.errors.map(err => err.name === 'nombre' ? (
                <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
              ): null)
            }

            <label htmlFor="Apellidos">Apellidos</label>
            <input
              name='apellido'
              onChange={handleChange}
              value={data.apellido}
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />

            { 
              auth.errors.map(err => err.name === 'apellido' ? (
                <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
              ): null)
            }

            <label htmlFor="Apellidos">Usuario</label>
            <input
              name='usuario'
              onChange={handleChange}
              value={data.usuario}
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />

            { 
              auth.errors.map(err => err.name === 'usuario' ? (
                <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
              ): null)
            }

            <div className="flex flex-col sm:flex-row mt-4">
              <button 
                type="submit" 
                className="w-full mb-2 sm:mb-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
              Guardar Cambios
              </button>

              <Link 
                to={"/"} 
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
              Cancelar
              </Link>
            </div>

      </form>
        ): null}
    </>
  )
    
}
  
export default Account
  