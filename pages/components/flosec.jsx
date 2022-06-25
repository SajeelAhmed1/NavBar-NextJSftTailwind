import React from 'react'
import { Link } from 'react-scroll';


export default function Flonav() {
  return (
    <div>
        <nav className=' h-full flex justify-center shadow-xl py-3 border-t-black '>
            <div className=' flex space-x-8'>
                <Link className='cursor-pointer' activeClass='projects' to='projects'>Option </Link>
                <Link className='cursor-pointer'>Option </Link>
                <Link className='cursor-pointer'>Option </Link>
                <Link className='cursor-pointer'>Option </Link>
                <Link className='cursor-pointer'>Option </Link>
                <Link className='cursor-pointer'> Option</Link>
                <Link className='cursor-pointer'>Option </Link>
                <Link className='cursor-pointer'> Option</Link>
                <Link className='cursor-pointer'>Option </Link>
                <Link className='cursor-pointer'> Option</Link>
                <Link className='cursor-pointer'>Option </Link>
                
            </div>
        </nav>
    </div>
  )
}
