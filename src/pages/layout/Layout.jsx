import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

function Layout() {

    return (
        <main className="max-h-screen max-w-full flex flex-col lg:flex-row">
          <Aside />
          <section className="w-full h-screen overflow-y-auto">
            <Header />
            <div className="m-4 p-4 h-auto bg-white shadow-md overflow-auto lg:overflow-hidden">
              <Outlet />
            </div>
            <Footer />
          </section>
        </main>
    )
    
}
  
export default Layout