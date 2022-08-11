import React, { useInsertionEffect, useEffect, useState } from 'react'
import { useAnimation, motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {

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
    <div name='contact' className='w-full h-screen bg-transparent flex justify-center items-center p-4'>
        <form action="https://getform.io/f/21dae4ac-30db-4756-aeb2-f68c72a346a8" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div ref={ref} className="pb-8">
              <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {inView && 
                  <motion.p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300' variants={appear} animate="visible" initial="hidden" exit="exit">Contact</motion.p>
                }
              </AnimatePresence>
                <p className='text-gray-300 py-4'>Submit the form below to get in touch</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" id="" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center font-bold hover:rounded-md duration-200'>Submit</button>
        </form>
    </div>
  )
}

export default Contact