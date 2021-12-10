import { Link } from 'react-router-dom';

function Signup() {

    return (
      <>
        <div className="min-h-screen min-w-full flex justify-center items-center">
          <div className="bg-white rounded-md shadow-md w-11/12 lg:w-3/4 h-3/5 flex flex-row">
            <div className="hidden sm:block w-2/4 ">
              <img className="w-full h-full" src="/src/public/images/auth/paciente.jpg" alt="login" />
            </div>
            <form className="bg-white rounded-md p-4 w-full sm:w-2/4 flex flex-col justify-center">
              
              <h2 className="text-xl sm:text-2xl lg:text-4xl text-center text-blue-500">Crear Cuenta</h2>
              <p className="text-sm md:text-md text-center font-thin text-gray-400">crear, edita y lleva un mejor control de tus pacientes</p>
              
              <label htmlFor="Nombres">Nombres</label>
              <input 
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />

              <label htmlFor="Apellidos">Apellidos</label>
              <input 
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />

              <label htmlFor="Usuario">Usuario</label>
              <input 
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />


              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />
              
              <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
              <input 
                type="password" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />

                <button 
                  type="submit" 
                  className="w-full my-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                Iniciar Sesión
                </button>
                <Link to={"/login"} className="text-center text-gray-400" >¿Ya tienes una cuenta?,  inicia sesión.</Link>
            </form>
          </div>
        </div>
      </>
    )
    
}
  
export default Signup
  