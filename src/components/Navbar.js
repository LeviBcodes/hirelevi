import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
       <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 className='text-5xl text-white font-extrabold text-pink-500'>LB</h1>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:scale-110 hover:text-white duration-150 hover:font-bold'>Home</li>
                <li className='hover:scale-110 hover:text-white duration-150 hover:font-bold'>About</li>
                <li className='hover:scale-110 hover:text-white duration-150 hover:font-bold'>Contact</li>
                <li className='hover:scale-110 hover:text-white duration-150 hover:font-bold'>Skills</li>
                <li className='hover:scale-110 hover:text-white duration-150 hover:font-bold'>Work</li>
            </ul>

            {/* Dropdown Button */}
            <div onClick={handleClick} className='md:hidden z-10 text-3xl'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Contact</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] bg-[#0077b5] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-bold rounded-lg'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300 text-lg'>
                            LinkedIn <FaLinkedin className='hover:scale-105 duration-300' size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-[#171515] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 font-bold rounded-lg'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300 text-lg'>
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
