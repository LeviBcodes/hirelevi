import React, { useInsertionEffect, useEffect, useState } from 'react'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Html from '../assets/html.png'
import Php from '../assets/php.png'
import ReactJS from '../assets/react.png'
import Sql from '../assets/sql.png'
import Github from '../assets/github.png'
import Laravel from '../assets/laravel.png'
import { useAnimation, motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {

  const appear = {
    hidden: {
        opacity: 0,
        x: 0,
    },
    visible: {
        opacity: 1,
        x: 100,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: 0,
    }
  }

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
          controls.start('visible');
      }
  }, [controls, inView]);

  return (
    <div name='skills' className='w-full h-screen bg-transparent text-gray-300 px-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full py-20'>
        <div className='md:text-center' ref={ref} >
          <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {inView && 
              <motion.p className='text-4xl font-bold inline border-b-4 border-pink-600' variants={appear} animate="visible" initial="hidden" exit="exit">Skills</motion.p>
            }
          </AnimatePresence>
          <p className='pt-7 pb-10 text-xl font-bold'>Technologies I use</p>
        </div>
        <motion.div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center' >
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
            <img className="w-20 mx-auto" src={Javascript} alt="javascript logo" />
            <p className='my-4 font-medium text-xl'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-6 hover:cursor-pointer'>
            <img className="w-20 mx-auto" src={Php} alt="php logo" />
            <p className='my-4 font-medium text-xl'>PHP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
            <img className="w-20 mx-auto" src={ReactJS} alt="reactjs logo" />
            <p className='my-4 font-medium text-xl'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
            <img className="w-20 mx-auto" src={Sql} alt="sql logo" />
            <p className='my-4 font-medium text-xl'>SQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className="w-20 mx-auto" src={Html} alt="html logo" />
            <p className='my-4 font-medium text-xl'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
            <img className="w-20 mx-auto" src={Css} alt="css logo" />
            <p className='my-4 font-medium text-xl'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
            <img className="w-20 mx-auto" src={Github} alt="github logo" />
            <p className='my-4 font-medium text-xl'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer'>
            <img className="w-20 mx-auto" src={Laravel} alt="laravel logo" />
            <p className='my-4 font-medium text-xl'>Laravel</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills