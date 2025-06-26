import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={headerStyle}>
    <div style={brandWrapper}>
      <img
        src="/assets/GFX_logo.jpg"
        alt="Millennial GFX Logo"
        style={logoStyle}
      />
      <span style={brandText}>Millennial GFX</span>
    </div>

    <nav style={navStyle}>
      <Link to="/" style={navLink}>Home</Link>
      <Link to="/about" style={navLink}>About</Link>
      <Link to="/services" style={navLink}>Services</Link>
      <Link to="/portfolio" style={navLink}>Portfolio</Link>
      <Link to="/contact" style={navLink}>Contact</Link>
    </nav>
  </header>
);

const headerStyle = {
  backgroundColor: '#0a0a36',
  padding: '16px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #1a1a4a',
};

const brandWrapper = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  lineHeight: '1',
};

const logoStyle = {
  width: '28px',
  height: '28px',
  objectFit: 'contain',
};

const brandText = {
  color: '#fff',
  fontSize: '1.25rem',
  fontWeight: '600',
};

const navStyle = {
  display: 'flex',
  gap: '24px',
};

const navLink = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
};

export default Header;
