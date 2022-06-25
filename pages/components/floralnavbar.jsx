import React from 'react'
import Image from 'next/image'

export default function Fnav() {
  return (
    <div>
        <nav className=' h-full flex py-5 justify-between px-2'>
            <div className=' h-20 w-80  flex justify-between'>
                <div className=' p-5'>
                    <p>
                        abc@gmail.com
                    </p>
                </div>
                <div className=' p-5'>
                    <p>
                        0123456789
                    </p>
                </div>
            </div>
            <div >

                <Image src="/flog.PNG" alt="me" width="250" height="80"  />
            </div>
            <div className='bg-purple-300 h-20 w-80'>

            </div>
        </nav>
    </div>
  )
}
