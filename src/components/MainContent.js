import React, { useEffect, useState } from 'react'
import {BsPlus} from 'react-icons/bs'
import TaskItem from './TaskItem'


const test = [
  {
    'id':1,
    'description':'img elements must have an alt prop, either with meaningful text, or an empty string for decorative',
    'created_at':'20-12-2020',
    'active':true
  },
  {
    'id':2,
    'description':'have an alt prop, either with meaningful text, or an empty string for decorative',
    'created_at':'20-12-2020',
    'active':true
  },
  {
    'id':3,
    'description':'img elements must have an alt prop, either with meaningful text, or an empty string for decorative',
    'created_at':'20-12-2020',
    'active':true
  },
  {
    'id':4,
    'description':'img elements must have an alt prop, either with meaningful text, or an empty string for decorative',
    'created_at':'20-12-2020',
    'active':false
  },
  {
    'id':5,
    'description':'img elements must have an alt prop, either with meaningful text, or an empty string for decorative',
    'created_at':'20-12-2020',
    'active':true
  },
  {
    'id':6,
    'description':'img elements must have an alt prop, either with meaningful text, or an empty string for decorative',
    'created_at':'20-12-2020',
    'active':false
  },
]
function MainContent() {
 
  const [ tasks , setTasks ] = useState(null)
  const [ filterResult , setFilterResult ] = useState(null)
  const [ newTask , setNewTask ] = useState('')

  useEffect(()=>{
    setTasks(test)
    setFilterResult(test)
  },[])

  const FilterResult = (e) => {
    // console.log(e.target.value)
    if (e.target.value == 'Completed' ){
      const activeFiltered = tasks.filter((val) => val.active == false)
      setFilterResult(activeFiltered) 
    }else if(e.target.value == 'Active'){
      const activeFiltered = tasks.filter((val) => val.active )
      setFilterResult(activeFiltered) 
    }else{
      setFilterResult(tasks) 
    }
  }


  
  const addTask = (e) => {
    e.preventDefault()

    if(newTask){
      const newToAdd = {
        'id': 92,
        'description': newTask ,
        'created_at' : '90-39-2903',
        'active':true
      }
      console.log(newToAdd) 
      setTasks(prev => {
        return (
          [
            ...prev,
            newToAdd
          ]
        )
      })
      setFilterResult(prev => {
        return (
          [
            ...prev,
            newToAdd
          ]
        )
      })
      setNewTask('')
    }

  }

  console.log(newTask)
  const deleteTask = (id) => {
    console.log(`Task deleted ${id}`)
    setTasks(prev => {
      return (
        [
          ...prev,

        ]
      )
    })
  }
  const completeTask = (id) => {
    console.log(`Task completed ${id}`)
  }
  
  return (
    <div className='w-full overflow-y-scroll main-container lg:w-5/12 mt-16 min-w-[600px] text-gray-600'>

        <div className='max-w-[700px]'>
            <form className='flex' onSubmit={addTask}>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative grow">
                    {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BsPlus className='w-8 h-8 text-gray-700'/>
                    </div> */}
                    <input onChange={(e)=> setNewTask(e.target.value)} value={newTask} 
                      type="text"  name='newtask'
                      className="block p-3 pl-10 w-full text-base font-medium text-gray-900 bg-gray-100 rounded-tl-md rounded-bl-md  
                        border-gray-300 focus:ring-0
                        placeholder:text-base placeholder:font-light placeholder:text-gray-600" 
                      placeholder="Add new task" required 
                    />
                </div>
                <button className='text-sm font-medium flex justify-center items-center border p-1 px-3 rounded-tr-md rounded-br-md bg-blue-600 text-white cursor-pointer'>
                  <BsPlus className='w-8 h-8 text-white '/>
                  <span>Create</span>
                </button>
            </form>
        </div>
        
        <div>
          <div className=' flex gap-2 items-center py-6'>
            <p className=' font-bold'>Filter</p>
            <select className='font-bold right-0 focus:ring-0 rounded-md' onChange={FilterResult}>
              <option >All</option>
              <option>Active</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      <div className=' flex flex-col gap-2 pb-10'>
        {filterResult?.reverse().map((task) => {
          return (
            <TaskItem key={task.id} completeTask={completeTask} deleteTask={deleteTask} 
                      id={task.id} description={task.description} active={task.active}
                      created_at={task.created_at}
            />
          )
        })}
      </div>
        
    </div>
  )
}

export default MainContent
