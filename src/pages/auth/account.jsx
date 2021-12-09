import { Link } from 'react-router-dom';

function Account() {

    return (
      <>
        <form className="p-2 flex flex-col w-full md:w-3/4">
            <h1 className="text-center mb-4 uppercase font-bold">Mi Cuenta</h1>
              <label htmlFor="Nombre">Nombres</label>
              <input 
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />
              
              <label htmlFor="Apellidos">Apellidos</label>
              <input 
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />
  
              <label htmlFor="Apellidos">Usuario</label>
              <input 
                type="text" 
                className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
              focus:border-gray-500 focus:bg-white focus:ring-0" />

              <div className="flex flex-col sm:flex-row mt-4">
                <button 
                  type="button" 
                  className="w-full mb-2 sm:mb-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
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
      </>
    )
    
}
  
export default Account
  