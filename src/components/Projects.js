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

    const slideUp = {
        hidden: {
            opacity: 0,
            y: "25vh",
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: 'tween',
                delay: .1,
            },
        },
        exit: {
            opacity: 0,
            y: "-10vh",
        }
    }

    const slideInRight = {
        hidden: {
            opacity: 0,
            x: "20vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .3,
                type: 'spring',
                delay: .1,
                damping: 55, 
                stiffness: 400,
            },
        },
        exit: {
            opacity: 0,
            x: "-20vw",
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
    <div name='projects' className='w-full h-screen bg-transparent text-gray-300 px-4 overflow-x-none'>
        <div className='max-w-[1000px] mx-auto flex py-20 md:py-4 flex-col justify-center w-full h-screen sm:h-full overflow-x-hidden'>
            <div ref={ref} className='pb-8 md:text-center overflow-x-hidden'>
                <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                    {inView && 
                        <motion.p className='text-4xl font-bold inline border-b-4 border-pink-600 overflow-x-hidden' variants={appear} animate="visible" initial="hidden" exit="exit">Projects</motion.p>
                    }
                </AnimatePresence>
                <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                    {inView &&
                        <motion.p className='py-6 font-medium text-xl overflow-x-hidden' variants={appear} animate="visible" initial="hidden" exit="exit">Check out some of my recent projects</motion.p>
                    }
                </AnimatePresence>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <AnimatePresence>
                    {inView &&
                        <motion.div style={{backgroundImage: `url(${Moviedeets})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div group-hover:opacity-50' variants={slideUp} animate="visible" initial="hidden" exit="exit">
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
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {modalOpen && <MovieDeetsModal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Projects