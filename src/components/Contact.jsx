import React, { useEffect, useRef } from 'react'

const InTouch = () => {

    // Clearing the form fields
    const form = useRef(null);

    const handleSubmit = () => {
        form.current.reset();
    }

    return (
        <div name='contact' className='w-full mt-16'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold mb-3 uppercase'>Trusted by businesses across Africa</h2>
                </div>

                <div className='grid md:grid-cols-2 gap-2 px-2 text-center'>
                    <div className='border py-5 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-5 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                        <p className='text-gray-400 mt-2'>Delivery</p>
                    </div>
                    {/* <div className='border py-5 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100K</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div> */}
                </div>
            </div>
            {/* Contact form */}
            <div className='my-8 py-8 bg-[#0a192f] flex justify-center items-center px-3 '>
                <form method='POST' action="https://getform.io/f/1785a9e0-97b5-419f-aac8-bce32400c34b" onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-3 text-center'>
                        <p className='text-3xl font-bold inline text-gray-300 uppercase text-center'>Get in touch</p>
                        <p className='text-gray-300'>Pop us an email - support@silky.com | Or give us a call +27624336760</p>
                        <p className='text-gray-300'></p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                    <input className='mt-2 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                    <input type="tel" className='mt-2 p-2 bg-[#ccd6f6]' name="phone" placeholder='Phone'/>
                    <textarea className='bg-[#ccd6f6] mt-2 p-2' name="message" rows="4" placeholder='Message'></textarea>
                    <button className='text-white border-2 px-6 py-3 my-3 mx-auto hover:bg-red-800 hover:border-red-900 flex items-center'>Lets Collaborate</button>
                </form>
            </div>
        </div>
    )
}

export default InTouch;