import React from 'react'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Html from '../assets/html.png'
import Php from '../assets/php.png'
import ReactJS from '../assets/react.png'
import Sql from '../assets/sql.png'
import Github from '../assets/github.png'
import Laravel from '../assets/laravel.png'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-transparent text-gray-300 px-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4 text-xl font-bold'>These are the technologies I've worked with.</p>
        </div>
        <motion.div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' >
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Javascript} alt="javascript logo" />
            <p className='my-4 font-medium'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6'>
            <img className="w-20 mx-auto" src={Php} alt="php logo" />
            <p className='my-4 font-medium'>PHP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={ReactJS} alt="reactjs logo" />
            <p className='my-4 font-medium'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Sql} alt="sql logo" />
            <p className='my-4 font-medium'>SQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Html} alt="html logo" />
            <p className='my-4 font-medium'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Css} alt="css logo" />
            <p className='my-4 font-medium'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Github} alt="github logo" />
            <p className='my-4 font-medium'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Laravel} alt="laravel logo" />
            <p className='my-4 font-medium'>Laravel</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills