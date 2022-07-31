import React from 'react'

function MainContentTrendingCard() {
  return (
    <div className=' min-w-[120px] w-32 h-fit overflow-hidden text-ellipsis rounded-lg cursor-pointer'>
      <div className=' w-full h-full rounded-lg'>
          <img className=' w-full h-3/6 rounded-lg'
            src='https://avatars.githubusercontent.com/u/95700260?s=400&u=8a038fc4fa00588887195b84026eb610c9213b4f&v=4' />

        <div className=' w-full pt-1 px-1'>
        <h3 className=' text-sm font-normal'>Olanrewaju Abdul-Kabeer</h3>
        <p className='text-gray-500 text-xs font-normal truncate text-ellipsis mt-2'>img elements must have an alt prop</p>
        </div>
        
      </div>
    </div>
  )
}

export default MainContentTrendingCard
