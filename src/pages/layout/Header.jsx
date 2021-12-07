
function Header() {


    return (
      <header className="m-4 p-4 shadow-md bg-white">
          <div className="flex flex-row">
            <h1 className="text-gray-600 font-bold text-md md:text-2xl uppercase tracking-wide">Administrador de pacientes</h1>
            <img 
                className="mx-2" 
                src="/src/public/images/dashboard/ico-inicio.png" 
                alt="inicio" 
            />
          </div>
          <p className="font-thin text-base text-gray-400"><i class="fas fa-angle-right"></i> Yarol Abraham</p>
       </header>
    )

}
  
export default Header
  