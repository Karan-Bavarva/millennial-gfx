// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';

// function ProtectedRoute({ children }) {
//   const token = localStorage.getItem('token');
//   if (!token) return <Navigate to="/admin/login" />;
//   return children;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Admin routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Other public routes can go here */}
//         {/* <Route path="/" element={<Home />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Admin Pages

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './components/AdminLayout';
import AdminRegister from './pages/AdminRegister';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />

          {/* ADMIN ROUTE */}

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />

          {/* Admin protected layout */}

            <Route path="/admin" element={<AdminLayout />}/>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Add more nested routes if needed */}
          
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;






// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="services" element={<Services />} />
//           <Route path="portfolio" element={<Portfolio />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

// // Admin Import Pages

// import AdminDashboard from './pages/AdminDashboard';
// import AdminLogin from './pages/AdminLogin';
// import AdminRegister from './pages/AdminRegister';

// function App() {
//   const isAdmin = localStorage.getItem('isAdmin') === 'true';

//   const handleLogout = () => {
//     localStorage.removeItem('isAdmin');
//     window.location.href = "/"; // force reload to clear session
//   };

//   return (
//     <Router>
//       {!isAdmin ? (
//         <header className="bg-indigo-900 text-white p-4 flex justify-between items-center">
//           <div className="text-xl font-bold flex items-center space-x-2">
//             <img src="/logo192.png" alt="logo" className="h-8 w-8"/>
//             <span>Millennial GFX</span>
//           </div>
//           <nav className="space-x-4">
//             <Link to="/" className="hover:underline">Home</Link>
//             <Link to="/about" className="hover:underline">About</Link>
//             <Link to="/services" className="hover:underline">Services</Link>
//             <Link to="/portfolio" className="hover:underline">Portfolio</Link>
//             <Link to="/contact" className="hover:underline">Contact</Link>
//           </nav>
//         </header>
//       ) : (
//         <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
//           <div className="text-xl font-bold flex items-center space-x-2">
//             <img src="/logo192.png" alt="logo" className="h-8 w-8"/>
//             <span>Millennial GFX</span>
//           </div>
//           <button 
//             onClick={handleLogout} 
//             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold"
//           >
//             Logout
//           </button>
//         </header>
//       )}

//       <Routes path="/" element={<Layout />}>
//         {/* <Route path="/" element={<div className="p-10 text-white">Home Page</div>} />
//         <Route path="/about" element={<div className="p-10 text-white">About Page</div>} />
//         <Route path="/services" element={<div className="p-10 text-white">Services Page</div>} />
//         <Route path="/portfolio" element={<div className="p-10 text-white">Portfolio Page</div>} />
//         <Route path="/contact" element={<div className="p-10 text-white">Contact Page</div>} /> */}
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="services" element={<Services />} />
//         <Route path="portfolio" element={<Portfolio />} />
//         <Route path="contact" element={<Contact />} />

//         {/* Admin routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/register" element={<AdminRegister />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


