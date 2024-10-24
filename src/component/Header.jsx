import React from 'react'
import Manual from './Manual'

function Header() {
  return (
    <div className='flex justify-center '>
    <div className=' w-3/5 flex flex-col '>

    <div className='    h-34 flex  text-l mx-auto    '>
  <h1 className=' justify-items-center text-l text-teal-400 whitespace-pre   font-semibold '>
    {`
    | |/ /   _ __   (_)   ___    | |__    
    | ' /    | '__|  | |  / __|   | '_  \\  
    | . \\    | |      |    \\__ \\  | |   |  |   
    |_|\\_\\  |_|     |_|  |___/ |_|   |_|
    `}


  </h1>
</div>
<div className="">

      <Manual/>
</div>
    
    
    </div>
    
</div>

  )
}

export default Header
