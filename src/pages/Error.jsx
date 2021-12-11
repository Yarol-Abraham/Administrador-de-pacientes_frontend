import { Link } from 'react-router-dom';

function Error({ message }) {
    return (
        <div className="w-full p-4 flex flex-col justify-center items-center">
            <p className='text-sm md:text-lg'>{message}</p>
            <Link className='text-sm md:text-lg text-blue-600' to={"/login"} >Inicia sesión</Link>
            <p className='text-sm md:text-lg'>o</p>
            <p className='text-sm md:text-lg'>vuelve a recargar la pagina</p>
        </div>
    )
}

export default Error;