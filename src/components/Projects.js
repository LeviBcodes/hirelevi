import React from 'react'
import Moviedeets from '.././assets/moviedeets.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300 px-4'>
        <div className='max-w-[1000px] mx-auto flex py-4 flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Moviedeets})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-95'>
                        <span className='text-2xl font-bold text-white tracking-wider px-3 mx-auto'>
                            Moviedeets.com
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="http://www.moviedeets.com" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                            </a>
                            <a href="https://www.github.com/LeviBCodes/moviedeets" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects