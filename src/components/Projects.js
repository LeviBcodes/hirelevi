import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300 px-4'>
        <div className='max-w-[1000px] mx-auto flex py-4 flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>
            <div style={{backgroundImage: `url()`}}
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div>
                        <span>
                        </span>
                        <div>
                            <a href="">
                                <button></button>
                            </a>
                            <a href="">
                                <button></button>
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