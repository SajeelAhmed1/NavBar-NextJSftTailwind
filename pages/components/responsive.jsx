import React from 'react'

export default function Resp() {
  return (
    <section>
        <div className='flex flex-col'>
      <div className='p-4 bg-gray-400 flex'  >Header</div>
      
      <div className='flex flex-col md:flex-row flex-grow'>
        <div className='p-4 bg-gray-300 flex'>
            Sidebar
        </div>
        <div className='p-4 bg-gray-100 flex-grow'>
            Content
        </div>
      </div>

        <div className='p-4 bg-gray-500'>
            Footer
        </div>
    </div>
    </section>
  )
}
