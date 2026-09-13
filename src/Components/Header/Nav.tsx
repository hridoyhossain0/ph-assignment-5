import { useState } from 'react';
import Logo from '../../assets/logo-text.png';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='fixed w-full top-0 shadow-md left-0 z-50 bg-white'>
                <div className='container mx-auto h-20 lg:h-30 px-5 items-center flex justify-between text-2xl'>

                    {/* Hamburger im mobile */}
                    <div className='lg:hidden'>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='text-3xl'
                        >
                            {menuOpen ? <RxCross2 /> : <FiAlignJustify />}
                        </button>
                    </div>


                    {/* Logo */}
                    <div className="navIcon flex items-center justify-center lg:justify-start gap-3">
                        <div className='w-16 h-16 overflow-hidden relative'>
                            <img
                                className='absolute w-[255px] max-w-none h-auto -left-[2px] -top-[2px]'
                                src={Logo}
                                alt="DS logo"
                            />
                        </div>
                            
                     
                        <span
                            className="text-4xl font-bold   items-center z-20
                            bg-linear-to-r from-orange-400 via-pink-400 to-violet-800
                            bg-clip-text text-transparent"
                        >
                            Dev Stack
                        </span>
                
                    </div>


                    {/* desknav */}
                    <div className="hidden lg:block">
                        <ul className='flex gap-7'>
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    {/* signin/up button */}
                    <div className="flex gap-2 lg:gap-5">
                        <button className='cursor-pointer font-semibold hover:text-gray-600'>
                            Sign In
                        </button>

                        <button className='btn btn-secondary rounded-full py-4 lg:py-7 text-lg lg:text-2xl px-4 lg:px-8'>
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>


            {/* mobileMenu */}
            <div
                className={`fixed top-20 left-0 z-40 w-64 h-full bg-white shadow-xl lg:hidden transform transition-transform duration-300 ${
                    menuOpen
                        ? 'translate-x-0'
                        : '-translate-x-full'
                }`}
            >
                <ul className='flex flex-col gap-6 p-7 text-xl'>

                    <li
                        className='cursor-pointer hover:text-pink-400 transition'
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </li>

                    <li
                        className='cursor-pointer hover:text-pink-400 transition'
                        onClick={() => setMenuOpen(false)}
                    >
                        Technologies
                    </li>

                    <li
                        className='cursor-pointer hover:text-pink-400 transition'
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </li>

                    <li
                        className='cursor-pointer hover:text-pink-400 transition'
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </li>

                    <li
                        className='cursor-pointer hover:text-pink-400 transition'
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </li>

                </ul>
            </div>
        </>
    );
};

export default Nav;