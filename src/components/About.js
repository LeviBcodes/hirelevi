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
                duration: 1,
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
                type: 'tween',
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
                duration: .6,
                type: 'tween',
                delay: .1,
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
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 overflow-hidden">
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div ref={ref} className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {inView && 
                            <motion.p className='text-4xl font-bold inline border-b-4 border-pink-600' variants={appear} animate="visible" initial="hidden" exit="exit">About</motion.p>
                        }
                    </AnimatePresence>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold overflow:hidden'>
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {inView &&
                            <motion.p  variants={slideInLeft} animate="visible" initial="hidden" exit="exit">Hello, I'm Levi. Welcome and thanks for viewing my website. Please take a look around.</motion.p>
                        }
                    </AnimatePresence>
                </div>
                <div className='sm:text-left text-2xl font-bold'>
                    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                        {inView &&
                            <motion.p  variants={slideInRight} animate="visible" initial="hidden" exit="exit">I'm a Full Stack Developer. I enjoy building web applications and I'm always looking to learn new technologies.</motion.p>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About