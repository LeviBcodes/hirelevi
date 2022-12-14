import React, { useInsertionEffect, useEffect, useState } from 'react'
import { useAnimation, motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
    
    const appear = {
        hidden: {
            opacity: 0,
            x: "-100vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .8,
            },
        },
        exit: {
            opacity: 0,
            x: "100vw",
        }
    }

    const slideInLeft = {
        hidden: {
            opacity: 0,
            x: "-100vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .6,
                type: 'spring',
                damping: 55, 
                stiffness: 400,
            },
        },
        exit: {
            opacity: 0,
            x: "100vw",
        }
    }

    const slideInRight = {
        hidden: {
            opacity: 0,
            x: "100vw",
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
            x: "-100vw",
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
    <div name="about" className="w-full h-screen bg-transparent text-gray-300 overflow-x-none">
        <motion.div layout className='flex flex-col justify-center items-center w-full h-screen sm:h-full pb-28 sm:pb-0 overflow-x-hidden'>
            <div ref={ref} className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 overflow-x-none'>
                <div className='sm:text-right pb-8 pl-4 overflow-x-none'>
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {inView && 
                            <motion.p layout className='text-4xl font-bold inline border-b-4 border-pink-600' variants={appear} animate="visible" initial="hidden" exit="exit">About Myself</motion.p>
                        }
                    </AnimatePresence>
                </div>
                <div className='overflow-x-none'>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 overflow-x-none'>
                <div className='sm:text-right text-4xl font-bold overflow-x-none'>
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {inView &&
                            <motion.p className="overflow-x-none" variants={slideInLeft} animate="visible" initial="hidden" exit="exit">Hello, I'm Levi. Welcome and thanks for viewing my online portfolio.</motion.p>
                        }
                    </AnimatePresence>
                </div>
                <div className='sm:text-left text-2xl font-bold overflow-x-none'>
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {inView &&
                            <motion.p className="overflow-x-none" variants={slideInRight} animate="visible" initial="hidden" exit="exit">I'm a Full Stack Developer. I enjoy building web applications and I'm always looking to learn new technologies.</motion.p>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About