import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div>
        <Link to="home" smooth duration={500} className="brand"><span className="brand-mark" aria-hidden="true" />SILKY<span style={{ color: 'var(--coral)' }}>.</span></Link>
        <p>Design, development, and hosting for businesses with somewhere to go.</p>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="services" smooth duration={500}>Services</Link>
        <Link to="work" smooth duration={500}>Work</Link>
        <Link to="contact" smooth offset={-40} duration={500}>Contact</Link>
      </nav>
    </div>
    <div className="footer-bottom"><span>© 2026 Silky Studio</span><span>Made with care in Ottawa</span></div>
  </footer>
);

export default Footer;