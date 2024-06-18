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
                    <NavItem onClick={closeNav} to="home">Home</NavItem>
                    <NavItem onClick={closeNav} to="about">About</NavItem>
                    <NavItem onClick={closeNav} to="platform">Services</NavItem>
                    <NavItem onClick={closeNav} to="pricing">Pricing</NavItem>
                    <NavItem onClick={closeNav} to="contact">Contact</NavItem>
                    <NavItem onClick={closeNav} to="work">Our Work</NavItem>
                    <li>
                        <button className="skeuomorphic-button-blue px-8 py-3 text-white rounded-md">
                            <Link to="contact" smooth={true} offset={-200} duration={500}>Get In Touch</Link>
                        </button>
                    </li>
                </ul>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleNav} aria-label="Toggle Navigation">
                        {navOpen ? <XMarkIcon className="w-6 h-6 text-gray-900 bg-white" /> : <Bars3Icon className="w-6 h-6 text-gray-900" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <ul className={`md:hidden ${navOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white border-t border-gray-200`}>
                <NavItem onClick={closeNav} to="home" mobile>Home</NavItem>
                <NavItem onClick={closeNav} to="about" mobile>About</NavItem>
                <NavItem onClick={closeNav} to="platform" mobile>Services</NavItem>
                <NavItem onClick={closeNav} to="pricing" mobile>Pricing</NavItem>
                <NavItem onClick={closeNav} to="contact" mobile>Contact</NavItem>
                <NavItem onClick={closeNav} to="work" mobile>Our Work</NavItem>
                <li>
                    <button className="block w-full text-left px-6 py-3 text-gray-900 rounded-md mt-1">
                        <Link to="contact" smooth={true} offset={-200} duration={500}>Get In Touch</Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

const NavItem = ({ onClick, to, mobile, children }) => (
    <li className={`bg-light hover:animate-pulse hover:text-zinc-400 font-bold nav-text-gradient py-2 ${mobile ? 'border-b border-gray-200' : ''} ${mobile ? 'text-gray-900' : 'text-gray-700'}`}>
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
