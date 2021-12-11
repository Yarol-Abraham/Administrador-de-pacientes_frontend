import { Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Error from '../Error';

function Layout() {
  const { auth } = useAuth();
  
  return (
    <main id="main" className="min-h-screen max-h-full max-w-full flex flex-col lg:flex-row">
      {
        auth.user && auth.status === 'success' ? (
          <>
            <Aside />
            <section className="flex flex-col justify-between w-full h-full overflow-y-auto">
              <Header />
              <div className="m-4 p-4 h-auto bg-white shadow-md overflow-auto lg:overflow-hidden">
                <Outlet />
              </div>
              <Footer />
            </section>
          </>
        ) : <Error message={auth.message} />
      }
      
    </main>
  )  
}

export default Layout