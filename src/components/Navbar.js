import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'
import { motion, useAnimation } from "framer-motion";


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
       <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-md z-10">
            <div>
                <h1 className='text-5xl text-white font-extrabold text-pink-600'>LB</h1>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link to="projects" smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Dropdown Button */}
            <div onClick={handleClick} className='md:hidden z-10 text-3xl hover:scale-110 duration-200'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'opacity-95 absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link></li>
                <li className='py-6 text-4xl hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-110 hover:text-white duration-200 hover:font-bold'>
                    <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] bg-[#0077b5] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-bold rounded-lg'>
                        <a href="https://www.linkedin.com/in/levi-burland-a1027b247/" target="_blank" className='flex justify-between items-center w-full text-gray-300 text-lg'>
                            LinkedIn <FaLinkedin className='hover:scale-105 duration-300' size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-[#171515] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-bold rounded-lg'>
                        <a href="https://www.github.com/LeviBcodes" target="_blank" className='flex justify-between items-center w-full text-gray-300 text-lg'>
                            GitHub <FaGithub className='hover:scale-105 duration-300' size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-[#ff5800] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-bold rounded-lg'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300 text-lg'>
                            Email <HiOutlineMail className='hover:scale-105 duration-300' size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-red-700 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-bold rounded-lg'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300 text-lg'>
                            Resume <BsFillPersonLinesFill className='hover:scale-105 duration-300' size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
       </div>
    )
}
export default Navbar
