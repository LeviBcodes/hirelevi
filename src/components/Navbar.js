import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Skills</li>
                <li>Work</li>
            </ul>

            {/* Dropdown Button */}
            <div onClick={handleClick} className='md:hidden z-10'>
                <FaBars />
            </div>

            {/* Mobile Menu */}
            <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Contact</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
            </ul>

            {/* Social Icons */}
            <div className='hidden'></div>
       </div>
    )
}
export default Navbar
