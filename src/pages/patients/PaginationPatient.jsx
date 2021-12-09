
function PaginationPatient() {
    
    return(
        <>
            <div>
                <button 
                    type="button"
                    className="border px-4 py-1 bg-blue-500 text-white"
                ><i className="fas fa-angle-right"></i></button>
                <button 
                    type="button"
                    className="border px-4 py-1 bg-white text-black font-bold"
                >1</button>
                <button 
                    type="button"
                    className="border px-4 py-1 bg-blue-500 text-white"
                ><i className="fas fa-angle-left"></i></button>
            </div>
        </>
    )

}

export default PaginationPatient;