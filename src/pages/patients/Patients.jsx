import SearchPatient from "./SearchPatient";
import OptionsPatient from './OptionsPatient';
import ListPatients from './ListPatients';
import PaginationPatient from "./PaginationPatient";

function Patients() {

    return (
      <>
      <div className="flex flex-col-reverse md:flex-row border md:h-1/5">
        <SearchPatient />
        <OptionsPatient />
      </div>
      <ListPatients />
      <PaginationPatient />
      </>
    )
    
}
  
export default Patients