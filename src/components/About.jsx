import React from 'react'
import { ArrowSmallRightIcon, PuzzlePieceIcon, ServerStackIcon } from '@heroicons/react/24/outline';
import { CpuChipIcon } from '@heroicons/react/24/solid';

import supportImage from '../assets/support.jpeg';

const About = () => {
    return (
        <div name='about' className='w-full'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImage} alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-5'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>What We Do</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300 text-center'>We take pride in our work, so when we build your application it has to not only meet your needs, but our own high quality standards.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-10 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PuzzlePieceIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Web Design</h3>
                            <p className='text-gray-600 text-xl'>Our mobile-first responsive web design allows a website to adapt according to screen sizes enabling the best possible web experience. We are a web design company based in South Africa helping businesses of all sizes get their presence online. Click here to see our web design packages.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600 cursor-pointer'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ServerStackIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Hosting</h3>
                            <p className='text-gray-600 text-xl'>Dedicated to providing the best web hosting and domain registration services in order to get you online in minutes. Fast, reliable, and feature-packed, ideal for both small and large business needs. Our packages include **free domain registration, free business emails, and a lifetime SSL certificate.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600 cursor-pointer'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <CpuChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Application Development</h3>
                            <p className='text-gray-600 text-xl'>Every business has its own unique set of requirements, having the right software solution should increase productivity and therefore increase business growth and efficiency. Thats why we always go out of our way to ensure our custom software integrations solve all your business needs.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600 cursor-pointer'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
