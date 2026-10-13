import React, { useState } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Work', to: 'work' },
  { label: 'Pricing', to: 'pricing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link to="home" smooth duration={500} className="brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true" />
          SILKY<span style={{ color: 'var(--coral)' }}>.</span>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}><Link to={link.to} smooth duration={500} className="nav-link">{link.label}</Link></li>
          ))}
        </ul>
        <Link to="contact" smooth offset={-40} duration={500} className="nav-cta button-primary">Start a project <span aria-hidden="true">↗</span></Link>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} smooth duration={500} className="nav-link" onClick={closeMenu}>{link.label}</Link>
        ))}
        <Link to="contact" smooth offset={-40} duration={500} className="button-primary" onClick={closeMenu}>Start a project <span aria-hidden="true">↗</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;