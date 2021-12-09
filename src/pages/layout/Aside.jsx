import { useState } from 'react';
import { Link } from 'react-router-dom';

function Aside() {
  // css
  const cssLink = "p-2 text-white transition duration-150 ease-in-out hover:bg-blue-50 hover:text-gray-800 hover:font-bold tracking-wider";

  const [ openMenu, setMenu ] = useState(false);
  const toggleMenu = state => setMenu(state);
  
    return (
      <aside className="lg:min-h-full w-full lg:w-1/6 bg-blue-900 p-4">
        <div className="flex flex-row justify-between lg:justify-center mb-2">
          <Link  to={"/"} className="text-white font-bold text-2xl uppercase font-mono">CRM <i className="fas fa-hospital-user"></i></Link>
          <button className="lg:hidden" type="button" onClick={()=>toggleMenu(!openMenu)}>
            <img src="/src/public/images/menu.svg" alt="menu" />
          </button>
        </div>
        <nav className={`${openMenu ? 'flex' : 'hidden'} lg:flex flex-col`}>
          <Link to={"/pacientes"} className={cssLink} href="#"><i className="fas fa-user-injured"></i> Pacientes</Link>
          <Link to={"/account"} className={cssLink} href="#"><i className="fas fa-user-circle"></i> Mi cuenta</Link>
          <Link to={"/account/password"} className={cssLink} href="#"><i className="fas fa-user-circle"></i> Cambiar Contraseña</Link>
          <a className={cssLink} href="#"><i className="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
        </nav>
      </aside>
    )

}
  
export default Aside
  