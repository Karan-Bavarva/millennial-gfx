// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//     <h2 className="text-xl font-bold">Millennial GFX</h2>
//     <div className="space-x-4">
//       <Link to="/" className="text-blue-600 hover:underline">Home</Link>
//       <Link to="/about" className="text-blue-600 hover:underline">About</Link>
//       <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
//       <Link to="/portfolio" className="text-blue-600 hover:underline">Portfolio</Link>
//       <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
//     </div>
//   </nav>
// );

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="bg-[#0a0a36] text-white shadow-md w-full">
//       <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="flex items-center space-x-2 text-xl font-bold">
//           <img src="/assets/GFX_logo.jpg" alt="logo" className="h-6 w-6" />
//           <span>Millennial GFX</span>
//         </div>

//         <nav className="hidden md:flex space-x-6 text-sm font-semibold">
//           <Link to="/" className="hover:text-yellow-400">Home</Link>
//           <Link to="/about" className="hover:text-yellow-400">About</Link>
//           <Link to="/services" className="hover:text-yellow-400">Services</Link>
//           <Link to="/portfolio" className="hover:text-yellow-400">Portfolio</Link>
//           <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
//         </nav>

//         <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)}>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
//             viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-semibold">
//           <Link to="/" className="block hover:text-yellow-400">Home</Link>
//           <Link to="/about" className="block hover:text-yellow-400">About</Link>
//           <Link to="/services" className="block hover:text-yellow-400">Services</Link>
//           <Link to="/portfolio" className="block hover:text-yellow-400">Portfolio</Link>
//           <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="bg-[#0a0a36] text-white shadow-md w-full">
//       <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="flex items-center space-x-2 text-xl font-bold">
//           <img src="/assets/GFX_logo.jpg" alt="logo" className="h-6 w-6" />
//           <span>Millennial GFX</span>
//         </div>

//         <nav className="hidden md:flex space-x-6 text-sm font-semibold">
//           <Link to="/" className="hover:text-yellow-400">Home</Link>
//           <Link to="/about" className="hover:text-yellow-400">About</Link>
//           <Link to="/services" className="hover:text-yellow-400">Services</Link>
//           <Link to="/portfolio" className="hover:text-yellow-400">Portfolio</Link>
//           <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
//         </nav>

//         <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)}>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-semibold">
//           <Link to="/" className="block hover:text-yellow-400">Home</Link>
//           <Link to="/about" className="block hover:text-yellow-400">About</Link>
//           <Link to="/services" className="block hover:text-yellow-400">Services</Link>
//           <Link to="/portfolio" className="block hover:text-yellow-400">Portfolio</Link>
//           <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


/* Final Nevbar */


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1'
      : 'hover:text-yellow-400 transition';

  return (
    <header className="bg-[#0a0a36] text-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-xl font-bold">
          <img src="/assets/logo.png" alt="logo" className="h-6 w-6" />
          <span>Millennial GFX</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-semibold">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
