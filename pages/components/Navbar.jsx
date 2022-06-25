import React from 'react'
import {Transition} from "@headlessui/react";
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <div>
        <nav className='shadow-sm fixed w-full z-10'>
            <div className="w-full">
                <div className="flex items-center h-20 w-full">
                    
                    <div className="flex itens items-center mx-20 justify-between w-full ">
                        <div className="flex justify-center items-center flex-shrink-0">
                            <h1 className='font-bold text-xl cursor-pointer'>
                                stream <span className='text-blue-500'>Line</span>
                            </h1>
                        </div>
                        {/* smoll screen hidden med screen show in block */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link activeClass='Home' to='about' smooth={true} offset={50} duration={500} className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black">
                                    Home
                                </Link>
                                <Link activeClass='about' to='about' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white rounded-md font-semibold px-3 py-2 text-md hover:font-black">
                                    About
                                </Link>
                                <Link activeClass='services' to='services' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white rounded-md font-semibold px-3 py-2 text-md hover:font-black">
                                    Services
                                </Link>
                                <Link activeClass='projects' to='projects' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-black hover:text-white rounded-md font-semibold px-3 py-2 text-md hover:font-black">
                                    Projects
                                </Link>
                                <Link activeClass='contact' to='contact' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-black bg-blue-600 text-white rounded-md font-semibold px-3 py-2 text-md ">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    </div>
  )
}

export default Navbar