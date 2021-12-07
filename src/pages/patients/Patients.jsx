import SearchPatient from "./SearchPatient";
import OptionsPatient from './OptionsPatient';

function Patients() {

    return (
      <>
      <div className="flex flex-col-reverse md:flex-row border">
        <SearchPatient />
        <OptionsPatient />
      </div>
      </>
    )
    
}
  
export default Patients