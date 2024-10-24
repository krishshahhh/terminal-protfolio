import React from 'react'
import CmdBox from './CmdBox'

function Manual() {
  return (
    <div>
        <div className=" ml-5 flex flex-col mt-4  ">
            <div className=' text-white font-mono flex p'><h1 >Hey</h1><h1  className='text-purple-600 px-1'>there !</h1><h1></h1></div>
            <div className="text-white font-mono flex">
                <h1>Welcome to My</h1>
                <h1 className='text-orange-500 px-1'>portfolio</h1>
                </div>
                 <div className='text-white font-mono flex flex-row'><h1>Type </h1><h1 className='text-red-600'>'help'</h1> <h1 >to get a list of available commands.</h1></div>
        </div>
        <CmdBox/>   
    </div>
  )
}

export default Manual
