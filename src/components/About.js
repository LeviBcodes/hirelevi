import React, { useInsertionEffect, useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {


  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <motion.p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</motion.p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hello, I'm Levi. Welcome and thanks for viewing my website. Please take a look around.</p>
                </div>
                <div>
                    <p>I'm a Full Stack Developer. I enjoy building web applications and I'm always looking to learn new technologies.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About