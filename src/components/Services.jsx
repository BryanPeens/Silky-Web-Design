import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const AllInOne = () => {
    return (
        <div id='platform' className='w-full pb-16 bg-white min-h-screen pt-28'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <h2 className='text-5xl font-bold text-center mt-5 text-gray-900'>Our Software Services</h2>
                <p className='text-2xl py-8 text-gray-600 text-center'>
                    We aim to reshape businesses into brands. Our services portfolio expands from clouding your data to presenting it in the best possible way,
                    with pixel-perfect designs. We strive to provide innovative customized solutions for each unique client's needs.
                </p>

                {/* Grid Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
                    {/* Service 1: Web App Development */}
                    <div className='flex items-start'>
                        <CheckIcon className='w-7 h-7 mr-4 text-green-500 mt-1' />
                        <div>
                            <h3 className='font-bold text-lg text-gray-900'>Web App Development</h3>
                            <p className='text-lg text-gray-700 pt-2 pb-4'>
                                We specialize in creating effective websites that generate leads, ensuring your online presence meets high standards of performance.
                            </p>
                        </div>
                    </div>

                    {/* Service 2: Software Maintenance and Support */}
                    <div className='flex items-start'>
                        <CheckIcon className='w-7 h-7 mr-4 text-green-500 mt-1' />
                        <div>
                            <h3 className='font-bold text-lg text-gray-900'>Software Maintenance and Support</h3>
                            <p className='text-lg text-gray-700 pt-2 pb-4'>
                                Ongoing maintenance and support to minimize downtime and ensure a stable digital environment for your organization.
                            </p>
                        </div>
                    </div>

                    {/* Service 3: Custom Software Integrations */}
                    <div className='flex items-start'>
                        <CheckIcon className='w-7 h-7 mr-4 text-green-500 mt-1' />
                        <div>
                            <h3 className='font-bold text-lg text-gray-900'>Custom Software Integrations</h3>
                            <p className='text-lg text-gray-700 pt-2 pb-4'>
                                Tailored software solutions designed to meet specific business needs, optimizing processes and enhancing efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Service 4: Search Engine Optimization */}
                    <div className='flex items-start'>
                        <CheckIcon className='w-7 h-7 mr-4 text-green-500 mt-1' />
                        <div>
                            <h3 className='font-bold text-lg text-gray-900'>Search Engine Optimization</h3>
                            <p className='text-lg text-gray-700 pt-2 pb-4'>
                                Enhance your online visibility and dominance through effective SEO strategies tailored to your business goals.
                            </p>
                        </div>
                    </div>

                    {/* Service 5: E-Commerce */}
                    <div className='flex items-start'>
                        <CheckIcon className='w-7 h-7 mr-4 text-green-500 mt-1' />
                        <div>
                            <h3 className='font-bold text-lg text-gray-900'>E-Commerce Solutions</h3>
                            <p className='text-lg text-gray-700 pt-2 pb-4'>
                                Secure and scalable e-commerce solutions that include website design, payment processing, and integration for seamless online selling.
                            </p>
                        </div>
                    </div>

                    {/* Service 6: Domain & Hosting */}
                    <div className='flex items-start'>
                        <CheckIcon className='w-7 h-7 mr-4 text-green-500 mt-1' />
                        <div>
                            <h3 className='font-bold text-lg text-gray-900'>Domain & Hosting</h3>
                            <p className='text-lg text-gray-700 pt-2 pb-4'>
                                Comprehensive hosting solutions tailored to your needs, including domain registration, cloud servers, and dedicated hosting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInOne;
