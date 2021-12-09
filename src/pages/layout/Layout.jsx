import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

function Layout() {

    return (
        <main className="min-h-screen max-h-full max-w-full flex flex-col lg:flex-row">
          <Aside />
          <section className="flex flex-col justify-between w-full h-full overflow-y-auto">
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