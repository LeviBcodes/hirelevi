import React, { useInsertionEffect, useEffect, useState } from 'react'
import Moviedeets from '.././assets/moviedeets.png'
import MovieDeetsModal from './MovieDeetsModal'
import { useAnimation, motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {

    const appear = {
        hidden: {
            opacity: 0,
            x: "-100vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            x: "100vw",
        }
    }

    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div name='projects' className='w-full md:h-screen bg-transparent text-gray-300 px-4'>
        <div className='max-w-[1000px] mx-auto flex py-20 md:py-4 flex-col justify-center w-full h-full'>
            <div ref={ref} className='pb-8 md:text-center'>
                <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                    {inView && 
                        <motion.p className='text-4xl font-bold inline border-b-4 border-pink-600' variants={appear} animate="visible" initial="hidden" exit="exit">Projects</motion.p>
                    }
                </AnimatePresence>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Moviedeets})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group-hover:opacity-50'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider px-3 mx-auto'>
                            Moviedeets.com
                        </span>
                        <div className="pt-8 text-center">
                            <button className="text-center rounded-lg px-4 py-1 m-2 bg-white text-gray-700 font-bold text-lg" onClick={()=>(modalOpen ? close() : open())}>View Demo</button>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href="http://www.moviedeets.com" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                            </a>
                            <a href="https://www.github.com/LeviBCodes/moviedeets" target="_blank" rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {modalOpen && <MovieDeetsModal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Projects