import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const AllInOne = () => {
    return (
        <div name='platform' className='w-full pb-16'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center mt-5'>Our Software Services</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>
                We aim to reshape businesses into brands. Our services portfolio expands from clouding your data to presenting it in the best possible way,
                with pixel-perfect designs. We strive to provide inovative customized sollutions for each unique clients needs.
                </p>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>
                    {/* 1 */}
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Web App Development</h3>
                            <p className='text-lg pt-2 pb-4'>We have literally built 100’s of websites over the years and we know exactly what it takes to make your website into a successful lead generating machine.</p>
                        </div>
                    </div>
                    {/* 2 */}
                    {/* <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Mobile App Development</h3>
                            <p className='text-lg pt-2 pb-4'>Our team of expert technology mobile app developers provide innovative Mobile App Development solutions such as Mobile Application Development i.e. Mobile App Games, Mobile Applications and Mobile App Marketing services that is a fun and exciting way to communicate a message to your consumers or users.</p>
                        </div>
                    </div> */}
                    {/* 3 */}
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>

                        <div>
                            <h3 className='font-bold text-lg'>Software Maintenance and Support</h3>
                            <p className='text-lg pt-2 pb-4'>Ongoing maintenance and support helps ensure your organisation can minimise downtime and enjoy a stable digital environment.</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>

                        <div>
                            <h3 className='font-bold text-lg'>Custom Software Integrations</h3>
                            <p className='text-lg pt-2 pb-4'>Our custom software and systems are specifically designed to meet your business and technology needs, so that you can optimise, automate and realise your differentiated business strategy.</p>
                        </div>
                    </div>
                    {/* 5 */}
                    {/* <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>

                        <div>
                            <h3 className='font-bold text-lg'>Testing</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Nulla quasi incidunt labore porro eos atque.</p>
                        </div>
                    </div> */}
                    {/* 6 */}
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>

                        <div>
                            <h3 className='font-bold text-lg'>Search Engine Optimization</h3>
                            <p className='text-lg pt-2 pb-4'>Search engine optimisation is an integral part of your online marketing strategy that we can help you with, ensuring your dominance on the Internet.</p>
                        </div>
                    </div>
                    {/* 7 */}
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>

                        <div>
                            <h3 className='font-bold text-lg'>E-Commerce</h3>
                            <p className='text-lg pt-2 pb-4'>Do you have a product or service to sell? We can add a fully secure affordable website design for e-commerce system and shopping cart to your site. This will include payment processing and fulfillment integration to your web design ecommerce package.</p>
                        </div>
                    </div>
                    {/* 8 */}
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-500' />
                        </div>

                        <div>
                            <h3 className='font-bold text-lg'>Domain & Hosting</h3>
                            <p className='text-lg pt-2 pb-4'>We offer a wide range of hosting solutions to suit 
                            your needs and budget. Choose from virtual servers, dedicated servers, 
                            domain names, cloud servers, shared hosting and more.</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default AllInOne;