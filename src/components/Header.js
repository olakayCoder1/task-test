import React from 'react'

function Header(props) {


  return (
    <div className=' w-full h-16 fixed top-0 bg-white z-50 px-4 lg:pl-0'>
      <div className=' w-full flex items-center place-content-center box-border'>
            <h2 className=' ml-2 font-bold text-xl py-3'>
              <span className="inline-block ">
                <span className='  text-blue-500'>T</span>rackit
                </span>
            </h2>
      </div>
    </div>
  )
}

export default Header
