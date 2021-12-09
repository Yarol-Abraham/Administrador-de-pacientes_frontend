
function SearchPatient() {

    return (
      <>
        <form className="p-2 w-full md:w-3/6 flex flex-col md:flex-row justify-between items-end">
          <div className="mb-3 md:mb-0 w-full md:w-4/5">
            <label htmlFor="Buscar">Buscar paciente</label>
            <input 
              type="text" 
              className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none
            focus:border-gray-500 focus:bg-white focus:ring-0" />
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