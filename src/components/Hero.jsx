import React from 'react';
import { Link } from 'react-scroll';
// import {
//     CloudArrowUpIcon,
//     CircleStackIcon,
//     PaperAirplaneIcon,
//     ServerIcon,
// } from '@heroicons/react/24/solid';

import bgImg from '../assets/bg.png';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between pt-14'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-4'>
            <p className='text-2xl mt-2'>Unique Design & Development</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Web Design & Develop­ment</h1>
            <p className='text-2xl'>This is our silky smooth Tech brand.</p>
            {/* <button className='py-3 px-6 sm:w-[60%] my-4'><Link to="platform" smooth={true} offset={-200} duration={500}>Get In Touch</Link></button> */}
        </div>
        <div>
            <img className='w-full' src={bgImg} alt="/" />
        </div>
        {/* <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl'>
            <p>Data Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><CloudArrowUpIcon className='h-6 text-indigo-600' /> App Security</p>
                <p className='flex px-4 py-2 text-slate-500'><CircleStackIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
            </div>
        </div> */}
    </div>
</div>
)
}

export default Hero


