import {
    BrowserRouter as Router,
    Routes as Routes,
    Route as Route
} from 'react-router-dom';

import Layout from '../pages/layout/Layout';
import Dashboard from '../pages/Dashboard';
import Patients from '../pages/patients/Patients';

function RoutesPages() {

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Dashboard />} />
              <Route path="pacientes" element={<Patients />} />
            </Route>
          </Routes>
        </Router>
      </>
    )

}
  
export default RoutesPages
  