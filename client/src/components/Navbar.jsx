import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h2 className="text-xl font-bold">Millennial GFX</h2>
    <div className="space-x-4">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
      <Link to="/portfolio" className="text-blue-600 hover:underline">Portfolio</Link>
      <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
