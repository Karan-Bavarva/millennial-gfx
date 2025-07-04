// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <main className="p-4">
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Layout = () => {
//   return (
//     <div className="min-h-screen w-full overflow-x-hidden bg-[#0a0a36] text-white flex flex-col">
//       <Navbar />
//       <main className="flex-grow w-full">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;



// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Layout = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-[#0a0a36] text-white overflow-x-hidden">
//       <Navbar />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a36] text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;





