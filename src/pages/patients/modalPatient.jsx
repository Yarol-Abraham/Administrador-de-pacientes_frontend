import { useState } from 'react';

function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <button 
        className="w-10 p-2 md:p-1 text-white bg-blue-400"
        type="button"
        onClick={() => setShowModal(true)}
    >
            <i className="fas fa-info"></i>
    </button>
    
      {showModal ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full md:w-4/5 my-6 mx-auto max-w-3xl h-4/5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Información del paciente
                  </h3>
                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-auto">
                    <label className="font-light" htmlFor="Nombre">Nombre Completo</label>
                    <input 
                        type="text" 
                        className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none" 
                        value="Yarol Abraham Choc Reyes"
                        disabled
                    />
                 
                 <div className="w-full my-2 flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-2/5">
                        <label className="font-light" htmlFor="Telefono">Telefono</label>
                        <input 
                            type="text" 
                            className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none" 
                            value="12345678"
                            disabled
                        />
                    </div>
                    <div className="w-full md:w-2/5">
                        <label className="font-light" htmlFor="Ocupación">Ocupación</label>
                        <input 
                            type="text" 
                            className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none" 
                            value="Ingeniero en sistemas"
                            disabled
                        />
                    </div>
                 </div>

                 <label className="font-light" htmlFor="Dirección">Dirección</label>
                    <input 
                        type="text" 
                        className="mt-1 p-2 block w-full rounded-md bg-gray-100 border outline-none" 
                        value="Guatemala - alta verapaz"
                        disabled
                    />

                <div className="my-2">
                    <label className="font-light" htmlFor="Sintomas">Sintomas</label>
                    <div className="flex flex-row flex-wrap">
                        <p className="text-white text-sm m-1 p-1 rounded-md bg-blue-300" >Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="text-white text-sm m-1 p-1 rounded-md bg-blue-300" >Lorem ipsum dolor sit.</p>
                        <p className="text-white text-sm m-1 p-1 rounded-md bg-blue-300" >Lorem ipsum dolor sit consectetur.</p>
                        <p className="text-white text-sm m-1 p-1 rounded-md bg-blue-300" >Lorem ipsum sit amet.</p>       
                    </div>
                </div>

               <div className="flex flex-col">
                    <label className="font-light" htmlFor="Nombre">Descripción</label>
                    <textarea 
                        name="descripcion" 
                        cols="30" 
                        rows="10"
                        defaultValue=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nostrum ducimus beatae molestias nulla magnam totam in quibusdam ipsum accusantium ipsa, voluptatem quis est repellendus veniam repellat nisi facilis? Nesciunt!"
                        className="outline-none border rounded-md bg-gray-100 "
                        disabled
                    >
                    
                    </textarea>
               </div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;