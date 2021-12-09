import {
    BrowserRouter as Router,
    Routes as Routes,
    Route as Route
} from 'react-router-dom';

import Layout from '../pages/layout/Layout';
import Dashboard from '../pages/Dashboard';
import Patients from '../pages/patients/Patients';
import CreatePatient from '../pages/patients/CreatePatient';
import EditPatient from '../pages/patients/EditPatient';

function RoutesPages() {

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Dashboard />} />
            </Route>

            <Route path="/pacientes" element={<Layout />} >
              <Route index element={<Patients />} />
              <Route path="nuevo" element={<CreatePatient />} />
              <Route path="editar/:id" element={<EditPatient />} />
            </Route>

          </Routes>
        </Router>
      </>
    )

}
  
export default RoutesPages
  