import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#8aecff] text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Levi Burland</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I like to build amazing web applications</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8aecff] hover:border-[#8aecff] hover:text-black duration-300 hover:rounded-md'>View My Work 
                    <span className=''>
                        <HiArrowNarrowRight className='ml-1' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
