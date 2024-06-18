import React from 'react';
import { Link } from 'react-scroll';
import bgImg from '../assets/bg.png';
import { motion } from 'framer-motion'; // Import motion from framer-motion for animations

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-white flex flex-col justify-center items-center pt-8'>
      <div className='container mx-auto px-6 py-24 md:py-32 md:flex md:items-center md:justify-between'> 
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='md:w-1/2 mt-11 text-center md:text-left'
        >
        <h1 className='py-3 text-4xl md:text-6xl font-bold text-gradient'>Unique Design & Development</h1>
        <p className='text-2xl cursive-text'>This is our silky smooth Tech brand.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='skeuomorphic-button-blue mt-6 py-3 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700'
          >
            <Link to='contact' smooth={true} offset={-200} duration={500}>
              Get In Touch
            </Link>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='mt-12 md:mt-0 md:w-1/2'
        >
          <div className='overflow-hidden'>
            <img className='w-full' src={bgImg} alt='Web Development' />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;


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
