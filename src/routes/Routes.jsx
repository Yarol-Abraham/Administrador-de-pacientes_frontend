import {
    BrowserRouter as Router,
    Routes as Routes,
    Route as Route,
    Navigate,
    useLocation
} from 'react-router-dom';
// layout
import Layout from '../pages/layout/Layout';
import Dashboard from '../pages/Dashboard';

// pacientes
import Patients from '../pages/patients/Patients';
import CreatePatient from '../pages/patients/CreatePatient';
import EditPatient from '../pages/patients/EditPatient';

// usuario
import Account from '../pages/auth/account';
import ChangePassword from '../pages/auth/ChangedPassword';

// Autenticación
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

function RoutesPages() {

    return (
      <>
        <Router>
          <Routes>
            {/* Autenticación */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
              
             {/* Dashboard */}
            <Route path="/" element={<Layout />} >
              <Route index element={<Dashboard />} />
            </Route>

            {/* Usuario */}
            <Route path="/account" element={<Layout />} >
              <Route index element={<Account />} />
              <Route path="password" element={<ChangePassword />} />
            </Route>
            
            {/* Pacientes */}
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

// function RequireAuth( children ) {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   return children;
// }
  
export default RoutesPages
  