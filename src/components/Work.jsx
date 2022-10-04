import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import workImg1 from '../assets/workImg1.png';
import spacetagram from '../assets/spacetagram.png';

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-900 h-full mt-24 mb-20'>
      <div className='max-w-[1024px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
        <h3 className='text-5xl font-bold text-gray-800 '>Recent Projects</h3>
          <p className='py-2 text-3xl'>Check out some of our most recent works</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

          {/* Grid Item 1*/}
          <div style={{ backgroundImage: `url(${workImg1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[300px]'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Weather App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://bryanpeens.github.io/weather-app-react' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BryanPeens/weather-app-react' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2*/}
          <div style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[300px]'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BryanPeens/LDAssessment' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3*/}
          <div style={{ backgroundImage: `url(${spacetagram})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  h-[300px]'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Polaris Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://bryanpeens.github.io/spacetagram/' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BryanPeens/spacetagram' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Work