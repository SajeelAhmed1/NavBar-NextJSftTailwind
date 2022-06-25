import React from 'react'
import Image from 'next/image'
import { BsTelephoneFill,BsFillBagFill,BsTruck } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { AiOutlineUser,AiOutlineSearch } from 'react-icons/ai';



export default function Fnav() {
  return (
    <div>
        <nav className=' h-full flex py-5 justify-between px-2 '>
            <div className=' h-10 w-80  flex justify-between border-b-gray-500'>
                <div className=' flex p-5 space-x-3'>
                <i>
                            <HiMail/>
                        </i> 
                        <span>
                            <p>
                                abc@gmail.com
                            </p>
                        </span>
                    
                </div>
                <div className=' flex p-5 space-x-3'>
                 
                        <i>
                            <BsTelephoneFill/>
                        </i> 
                        <span>
                            <p>
                                0123456789
                            </p>
                        </span>
                </div>
            </div>
            <div  >

                <Image src="/flog.PNG" alt="me" width="250" height="80"  />
            </div>
            <div className='flex justify-between p-5 space-x-6 py-4 w-80 h-5'>

                   <i> <BsFillBagFill/></i>
                    
                   <i><BsTruck/></i>
                   <i><AiOutlineUser/></i>
                   <i><AiOutlineSearch/></i>
                   
                    
                    
                    

            </div>
        </nav>
    </div>
  )
}
