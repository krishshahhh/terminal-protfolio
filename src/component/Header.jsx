import React from 'react'

function Header() {
  return (
    <div className='flex justify-center mt-4'>
      <div className=' w-3/4 h-14 flex justify-start text-l flex-col'>
        {/* <img src="" alt="" /> */}
        <h1 className='text-white font-mono'>Krish's Portfolio v1.0</h1>
        <h1 className='text-white font-mono'>Welcome to the terminal-inspired portfolio of Krish, backend developer.</h1>
        <h1 className='text-white font-mono'>For more information, type: </h1> 
        <span className='text-orange-500'>Help</span>
        <input type="text" className='outline-none text-white bg-transparent' />
      </div>

    </div>
  )
}

export default Header
