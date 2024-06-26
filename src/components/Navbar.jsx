import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);
    const closeNav = () => setNavOpen(false);

    return (
        <nav className="bg-white fixed w-full z-10 nav-text-gradient">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-3xl sm:text-4xl font-bold cursor-pointer">
                    <Link to="home" smooth={true} duration={500}>SILKY.</Link>
                </h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 items-center cursor-pointer">
                    {navLinks.map(link => (
                        <NavItem key={link.to} onClick={closeNav} to={link.to}>
                            {link.label}
                        </NavItem>
                    ))}
                    <li>
                        <button className="skeuomorphic-button-blue px-8 py-3 text-white rounded-md">
                            <Link to="contact" smooth={true} offset={-200} duration={500}>Get In Touch</Link>
                        </button>
                    </li>
                </ul>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleNav} aria-label="Toggle Navigation">
                        {navOpen ? <XMarkIcon className="w-6 h-6 text-gray-900" /> : <Bars3Icon className="w-6 h-6 text-gray-900" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {navOpen && (
                <ul className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200">
                    {navLinks.map(link => (
                        <NavItem key={link.to} onClick={closeNav} to={link.to} mobile>
                            {link.label}
                        </NavItem>
                    ))}
                    <li>
                        <button className="block w-full px-6 py-3 text-gray-900 rounded-md mt-1 skeuomorphic-button-blue text-center">
                            <Link to="contact" smooth={true} offset={-200} duration={500}>Get In Touch</Link>
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

const navLinks = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Services', to: 'platform' },
    { label: 'Pricing', to: 'pricing' },
    { label: 'Contact', to: 'contact' },
    { label: 'Our Work', to: 'work' },
];

const NavItem = ({ onClick, to, mobile, children }) => (
    <li className={`hover:animate-pulse hover:text-zinc-400 font-bold nav-text-gradient py-2 ${mobile ? 'border-b border-gray-200' : ''} ${mobile ? 'text-gray-900' : 'text-gray-700'}`}>
        <Link onClick={onClick} to={to} smooth={true} duration={500} className="block px-6 w-full text-center">{children}</Link>
    </li>
);

export default Navbar;

const skeuomorphicButtonBlueCSS = `
  .skeuomorphic-button-blue {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #4A90E2, #0077B6, #1B98E0); /* Blueish gradient */
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    transition: transform 0.2s, background 0.3s;
    color: white;
  }
  .skeuomorphic-button-blue:hover {
    background: linear-gradient(to right, #0077B6, #1B98E0, #4A90E2); /* Adjusted hover gradient */
    transform: scale(1.05);
  }
  .skeuomorphic-button-blue:active {
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
  }
`;

// Inject CSS styles for the blue button
const styleSheetBlue = document.createElement("style");
styleSheetBlue.type = "text/css";
styleSheetBlue.innerText = skeuomorphicButtonBlueCSS;
document.head.appendChild(styleSheetBlue);
