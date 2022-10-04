import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full pb-16 text-white'>
        <div className='w-full h-[700px] bg-slate-900 absolute mix-blend-overlay'></div>

        <div className='max-w-[1240px] mx-auto py-8'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price to suite your needs</h3>
                <p className='text-3xl'>
                    Our most popular deals
                </p>
            </div>

            <div className='grid md:grid-cols-2'>
            {/* 2 Standard */}
                <div className='bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>2 pager</span>
                    <div>
                        <p className='text-5xl font-bold py-2 flex'>R4500</p>
                    </div>
                    <p className='text-2xl py-2 text-slate-500 uppercase'>2 page responsive website.</p>
                    <div className='text-1xl'>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Mobile Optimized.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> ReactJs, HTML, TailwindCss.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Search Engine Optimization.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Online Hit Counter.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Google Maps.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Links to Other Sites.</p>
                        <button className='w-full py-3 my-3'>Get Started</button>
                    </div>
                </div>

            {/* 5 Standard */}
            <div className='bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>5 pager</span>
                    <div>
                        <p className='text-5xl font-bold py-2 flex'>R7500</p>
                    </div>
                    <p className='text-2xl py-2 text-slate-500 uppercase'>5 page responsive website.</p>
                    <div className='text-1xl'>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Mobile Optimized.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> ReactJs, HTML, TailwindCss.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Search Engine Optimization.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Online Hit Counter.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Google Maps.</p>
                        <p className='flex py-2 '><CheckIcon className='w-6 mr-5 text-green-500'/> Links to Other Sites.</p>
                        <button className='w-full py-3 my-3'>Get Started</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Pricing