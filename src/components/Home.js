import React, { useInsertionEffect, useEffect, useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useAnimation, motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Home = () => {
    const helloAppear = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.2,
            },
        },
        exit: {
            opacity: 0,
        }
    }

    const nameAppear = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.2,
                type: 'tween',
                delay: .3,
            },
        },
        exit: {
            opacity: 0,
        }
    }

    const titleAppear = {
        hidden: {
            opacity: 0,
            y: "-25vh",
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

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

  return (
    <div name='home' className='bg-transparent w-full h-screen'>

        {/* Container */}
        <div ref={ref} className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {inView && 
                    <motion.p className='text-pink-600 text-3xl' variants={helloAppear} animate="visible" initial="hidden" exit="exit">Hello, my name is</motion.p>
                }
            </AnimatePresence>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {inView && 
                    <motion.h1 className='text-4xl sm:text-7xl font-bold text-white' variants={nameAppear} animate="visible" initial="hidden" exit="exit">Levi Burland</motion.h1>
                }
            </AnimatePresence>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
                {inView && 
                    <motion.h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' variants={titleAppear} animate="visible" initial="hidden" exit="exit">I'm a Full Stack Web Developer.</motion.h2>
                }
            </AnimatePresence>
            <div className='py-5'>
                <Link to="projects" smooth={true} offset={50} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 hover:rounded-md font-medium'>View My Work 
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
