import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const Pricing = () => {
    return (
        <div id='pricing' className='relative min-h-screen pt-28'>
            {/* Background Overlay */}
            <div className='absolute inset-0 bg-blue-900/100 backdrop-blur-lg bg-opacity-50 rounded-tl-[400px]'></div>

            {/* Content Container */}
            <div className='max-w-7xl mx-auto text-white relative px-4 py-24'>
                {/* Section Heading */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold uppercase tracking-wider text-white mb-2'>Pricing Plans</h2>
                    <p className='text-xl text-gray-300'>Choose the best plan that suits your needs</p>
                </div>

                {/* Pricing Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* 2 Pager */}
                    <div className='bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300'>
                        <div className='p-6'>
                            <span className='absolute top-0 left-0 mt-4 ml-4 uppercase px-3 py-1 bg-indigo-500 text-white rounded-full text-sm'>5 Pager</span>
                            <p className='text-5xl font-bold text-gray-900 py-4'>$280</p>
                            <p className='text-2xl text-gray-800 uppercase'>5 page responsive website.</p>
                            <div className='mt-6'>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Mobile Optimized</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>ReactJs, HTML, TailwindCss</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Search Engine Optimization</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Online Hit Counter</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Google Maps</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Links to Other Sites</p>
                                </div>
                            </div>
                            <button className='skeuomorphic-button-blue w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* 5 Pager */}
                    <div className='bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300'>
                        <div className='p-6'>
                            <span className='absolute top-0 left-0 mt-4 ml-4 uppercase px-3 py-1 bg-indigo-500 text-white rounded-full text-sm'>10 Pager</span>
                            <p className='text-5xl font-bold text-gray-900 py-4'>$520</p>
                            <p className='text-2xl text-gray-800 uppercase'>10 page responsive website.</p>
                            <div className='mt-6'>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Mobile Optimized</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>ReactJs, HTML, TailwindCss</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Search Engine Optimization</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Online Hit Counter</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Google Maps</p>
                                </div>
                                <div className='flex items-center py-2'>
                                    <CheckIcon className='w-6 h-6 mr-3 text-green-500' />
                                    <p className='text-gray-700'>Links to Other Sites</p>
                                </div>
                            </div>
                            <button className='skeuomorphic-button-blue w-full py-3 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;


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
