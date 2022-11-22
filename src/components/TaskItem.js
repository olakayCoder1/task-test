import React from 'react'
import {BsCheck , BsCheck2Square , BsSquare , BsTrash} from 'react-icons/bs'

function TaskItem({id , description , created_at , active , deleteTask , completeTask}) {
    
    const handleDelete = () => {
        deleteTask(id)
    }
    const handleComplete = () => {
        completeTask(id)
    }

  return (
    <div className='text-sm font-medium flex items-center gap-3  border p-2 px-3 rounded-md'>
        {active ? <BsSquare  className='h-5 w-5 text-blue-500 cursor-pointer' onClick={handleComplete}/> : <BsCheck2Square  className='h-5 w-5 text-blue-500 cursor-pointer'/>}
        <div className='grow flex flex-col'>
            <p>{description}</p>
            <time className=' text-xs font-medium text-gray-500'>{created_at}</time>
        </div>
       <BsTrash className='h-5 w-5 text-red-500 cursor-pointer' onClick={handleDelete}/>
    </div>
  )
}

export default TaskItem
