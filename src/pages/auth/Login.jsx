import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { login } from '../../redux/actions/auth/authAction';
function Login() {

  const [ data, setData ] = useState({
    usuario: "",
    password: ""
  });

  const { handleAuth } = useAuth(data, login);

  const handleChange = function(e) {
    setData({...data, [e.target.name]: e.target.value });
  }

  const handleForm = function(e) {
    e.preventDefault();
    handleAuth();
  }

    return (
      <>
        <div className="min-h-screen min-w-full flex justify-center items-center">
          <div className="bg-white rounded-md shadow-md w-3/4 h-3/5 flex flex-row">
            <div className="hidden sm:block h-full w-2/4 ">
              <img className="w-full h-full" src="/src/public/images/auth/doctor.png" alt="login" />
            </div>
            <form 
              className="bg-white rounded-md p-4 w-full sm:w-2/4 flex flex-col justify-center"
              onSubmit={handleForm}
            >
              
              <h2 className="text-xl sm:text-2xl lg:text-4xl text-center text-blue-500">Iniciar Sesión</h2>
              <p className="text-sm md:text-md text-center font-thin text-gray-400">crear, edita y lleva un mejor control de tus pacientes</p>
              
              <label htmlFor="Usuario">Usuario</label>
              <input
                name='usuario'
                onChange={handleChange} 
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" 
                // required
              />

              <label htmlFor="password">Contraseña</label>
              <input 
                name='password'
                onChange={handleChange}
                type="password" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" 
                //required
              />

                <button 
                  type="submit" 
                  className="w-full my-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                Iniciar Sesión
                </button>
                <Link to={"/signup"} className="text-center text-gray-400" >¿No tienes una cuenta?, crea una.</Link>
            </form>
          </div>
        </div>
      </>
    )
    
}
  
export default Login
  