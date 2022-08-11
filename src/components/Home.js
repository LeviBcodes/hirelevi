import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-2xl'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Levi Burland</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>I'm a Full Stack Web Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I like to build amazing web applications</p>
            <div>
                <Link to="projects" smooth={true} offset={50} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 hover:rounded-md'>View My Work 
                        <span className='group-hover:rotate-90 group-hover:scale-105 duration-300'>
                            <HiArrowNarrowRight className='ml-1' />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
