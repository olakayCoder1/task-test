import React from 'react'
import {BsListUl ,BsTextIndentLeft, BsBoxArrowInUpRight} from 'react-icons/bs'
import {AiFillHome,AiOutlinePlus} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import SidebarRow from './SidebarRow'
import SideNoIcon from './SideNoIcon'

function Sidebar(props) {

  console.log(props.navDisplay)
  return (
    <>
    <div className="hidden w-[60%] fixed top-0 bottom-0 left-0 z-50 lg:block h-full lg:w-[18%]  border-t py-3 overflow-y-scroll">
        <div className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full bg-blue-100 text-blue-700'>
            <AiFillHome  className=" text-lg"/>
            <h2 className=' ml-2'>Explore show</h2>
        </div>
        <SidebarRow title="subscription" Icon={BsListUl} />
        <SidebarRow title="Queue" Icon={CgPlayListAdd} />
        <SidebarRow title="Add RSS feed" Icon={AiOutlinePlus} />
        <hr className=' my-4 text-gray-300'/> 
        <SideNoIcon title="Settings" />
        <SideNoIcon title="Help" />
        <SideNoIcon title="Publisher guidelines" />
        <SideNoIcon title="Send feedback" />
        <hr className=' my-4 text-gray-300'/> 
        <SidebarRow title="Get the android app" Icon={BsBoxArrowInUpRight} />
        <SidebarRow title="Get the IOS app" Icon={BsBoxArrowInUpRight} />

        <p className=' text-xs font-base text-gray-400 px-6 my-4'>Privacy. Terms</p>

    </div>
    <div className={`${props.navDisplay ? " w-[60%] fixed top-0 bottom-0 left-0 z-50" : "w-0"} lg:hidden h-full  border-t py-3 overflow-y-scroll`}>
        <div className='px-6 w-full flex items-center text-sm font-medium py-3 mr-2 rounded-r-full bg-blue-100 text-blue-700'>
            <AiFillHome  className=" text-lg"/>
            <h2 className=' ml-2'>Explore show</h2>
        </div>
        <SidebarRow title="subscription" Icon={BsListUl} />
        <SidebarRow title="Queue" Icon={CgPlayListAdd} />
        <SidebarRow title="Add RSS feed" Icon={AiOutlinePlus} />
        <hr className=' my-4 text-gray-300'/> 
        <SideNoIcon title="Settings" />
        <SideNoIcon title="Help" />
        <SideNoIcon title="Publisher guidelines" />
        <SideNoIcon title="Send feedback" />
        <hr className=' my-4 text-gray-300'/> 
        <SidebarRow title="Get the android app" Icon={BsBoxArrowInUpRight} />
        <SidebarRow title="Get the IOS app" Icon={BsBoxArrowInUpRight} />

        <p className=' text-xs font-base text-gray-400 px-6 my-4'>Privacy. Terms</p>

    </div>
    </>
    
  )
}

export default Sidebar
