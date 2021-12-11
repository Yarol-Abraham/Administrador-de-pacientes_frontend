import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes as Routes,
    Route as Route
} from 'react-router-dom';

import useAuth from "../hooks/useAuth";
import { authUser } from '../redux/actions/auth/authAction';

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
            <Route path="/" element={
              <RequireAuth >
                <Layout />
              </RequireAuth>
              } 
            >
              <Route index element={<Dashboard />} />
            </Route>

            {/* Usuario */}
            <Route path="/account" element={
              <RequireAuth >
                <Layout />
              </RequireAuth>
            } >
              <Route index element={<Account />} />
              <Route path="password" element={<ChangePassword />} />
            </Route>
            
            {/* Pacientes */}
            <Route path="/pacientes" element={
              <RequireAuth >
                <Layout />
              </RequireAuth>
            } >
              <Route index element={<Patients />} />
              <Route path="nuevo" element={<CreatePatient />} />
              <Route path="editar/:id" element={<EditPatient />} />
            </Route>

          </Routes>
        </Router>
      </>
    )

}

function RequireAuth({ children }) {

  const { handleAuth } = useAuth({}, authUser); 
  useEffect(()=>{ handleAuth(); }, []);

  return children;
}
  
export default RoutesPages;
  