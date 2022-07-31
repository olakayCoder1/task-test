import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSearch} from 'react-icons/bi'
import {BsGrid3X3Gap} from 'react-icons/bs'

function Header(props) {


    function toggleBar(){
        props.handleNav()
    }
  return (
    <div className=' w-full h-16 sticky top-0 bg-white z-50'>
      <div className=' w-full flex justify-between items-center lg:px-3 box-border'>
          <div className=' flex items-center py-2'>
                <p onClick={toggleBar}
                    className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
                  <GiHamburgerMenu className=' text-xl font-semibold text-gray-500'/>
                </p>
              <h2 className=' ml-2 text-xl font-light'><spann className="hidden md:inline-block "><span className=' font-normal text-blue-500'>G</span>oogle</spann> <span>Podcasts</span></h2>
          </div>
          <div className=' w-3/6 h-full'>
          <form className='hidden lg:block'>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  outline-none focus:shadow-md focus:bg-white focus:border-gray-50 placeholder:text-xl placeholder:font-light placeholder:text-gray-300" placeholder="Search for podcasts" required />
            </div>
            </form>
            
          </div>
          <div className=' flex items-center'>
                <p className='lg:hidden'>
                <BiSearch />
                </p>
              <p className=' p-3 hover:bg-gray-300 rounded-full cursor-pointer'>
              <BsGrid3X3Gap className=' text-lg font-semibold text-gray-500'/>
              </p>
              <img className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/95700260?s=400&u=8a038fc4fa00588887195b84026eb610c9213b4f&v=4' />
          </div>
      </div>
    </div>
  )
}

export default Header
