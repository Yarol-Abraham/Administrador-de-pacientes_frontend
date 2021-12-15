import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { signup } from '../../redux/actions/auth/authAction';

function Signup() {

  const [ data, setData ] = useState({
    nombre: "",
    apellido: "",
    usuario: "",
    password: "",
    passwordConfirm: ""
  });

  let navigate = useNavigate();

  const { handleAuth, auth } = useAuth(data, signup);
  useEffect(() => {
    if(auth.user && auth.status === 'success') navigate("/", { replace: true });
  }, [auth.user, auth.status])

  const handleChange = function(e) {
    setData({...data, [e.target.name]: e.target.value });
  }

  const handleForm = function(e) {
    e.preventDefault();
    handleAuth();
  }

  return (
      <>
        <div id='main' className="min-h-screen min-w-full flex justify-center items-center">
          <div className="bg-white rounded-md shadow-md w-11/12 lg:w-3/4 h-3/5 flex flex-row">
            <div className="hidden sm:block w-2/4 ">
              <img className="w-full h-full" src="/src/public/images/auth/paciente.jpg" alt="login" />
            </div>
            <form 
              className="bg-white rounded-md p-4 w-full sm:w-2/4 flex flex-col justify-center"
              onSubmit={handleForm}
            >
             
              <h2 className="text-xl sm:text-2xl lg:text-4xl text-center text-blue-500">Crear Cuenta</h2>
              <p className="text-sm md:text-md text-center font-thin text-gray-400">crear, edita y lleva un mejor control de tus pacientes</p>
              
              <label htmlFor="Nombres">Nombres</label>
              <input 
                name='nombre'
                onChange={handleChange}
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border border-gray-200 outline-none
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
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />
              
              { 
                auth.errors.map(err => err.name === 'apellido' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

              <label htmlFor="Usuario">Usuario</label>
              <input 
                name='usuario'
                onChange={handleChange}
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />
              
              { 
                auth.errors.map(err => err.name === 'usuario' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

              <label htmlFor="password">Contraseña</label>
              <input 
                name='password'
                onChange={handleChange}
                type="password" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />
              
              { 
                auth.errors.map(err => err.name === 'password' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

              <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
              <input 
                name='passwordConfirm'
                onChange={handleChange}
                type="password" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />
              
              { 
                auth.errors.map(err => err.name === 'passwordConfirm' ? (
                  <p key={err.name} className='text-sm text-red-500 font-thin'>{err.message}</p> 
                ): null)
              }

              <button 
                type="submit" 
                className="w-full my-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
              Crear Cuenta
              </button>
              <Link to={"/login"} className="text-center text-gray-400" >¿Ya tienes una cuenta?,  inicia sesión.</Link>
            </form>
          </div>
        </div>
      </>
    )
    
}
  
export default Signup
  