import React, { useEffect, useState } from 'react'
import {BsPlus ,BsPencil , BsPen} from 'react-icons/bs'
import TaskItem from './TaskItem'
import uuid from 'react-uuid';



function MainContent() {
 
  const [ tasks , setTasks ] = useState(()=> JSON.parse(localStorage.getItem('tasks'))|| [])
  const [ active , setActive ] = useState(0)
  const [ filterResult , setFilterResult ] = useState(()=> JSON.parse(localStorage.getItem('tasks'))|| [] )
  const [ newTask , setNewTask ] = useState('')
  const [ searchValue , setSearchValue ] = useState('')

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem('tasks'))){
      const val = JSON.parse(localStorage.getItem('tasks'))
      setActive((val?.filter((val) => val.active == true ).length))
    }
    
  },[])

  console.log(tasks)
  const FilterResult = (e) => {
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

    const currentdate = new Date()
    const cuurent_time = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    if(newTask){

      const newToAdd = {
        'id': uuid() ,
        'description': newTask ,
        'created_at' : cuurent_time,
        'active':true
      }  
      let newTasks = [ ...tasks ,  newToAdd ]          
      setTasks(prev => {
        return ([ ...prev,  newToAdd ] )
      })
      setFilterResult(prev => {
        return ( [ ...prev, newToAdd ] )
      })
      setNewTask('')
      console.log(tasks)
      localStorage.setItem('tasks', JSON.stringify(newTasks))
    }
    
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks];
        newTasks[index].active = false;
        newTasks.splice(index,1)
        setTasks(newTasks);
        setFilterResult(newTasks)
        setActive((newTasks?.filter((val) => val.active == true ).length))
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        
   
  }
  
  const completeTask = (index) => {
    const newTasks = [...tasks];
        newTasks[index].active = false;
        setTasks(newTasks);
        setFilterResult(newTasks)
        setActive((newTasks?.filter((val) => val.active == true ).length))
        localStorage.setItem('tasks', JSON.stringify(newTasks))
  }
  

  const searchTask = (e) => {
    e.preventDefault()
    const searchResult = tasks.filter((val) => val.description.indexOf(searchValue) != -1)
    setFilterResult(searchResult)


  }
  
  return (
    <div className='w-full overflow-y-scroll main-container  mt-16  text-gray-600'>
    <div className='w-full md:min-w-[700px] md:w-6/12 mx-auto'>
      <div className='max-w-[700px]'>
            <form className='flex' onSubmit={addTask}>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative grow">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BsPen className='w-5 h-5 text-gray-700'/>
                    </div>
                    <input onChange={(e)=> setNewTask(e.target.value)} value={newTask} 
                      type="text"  name='newtask'
                      className="block p-3 pl-10 w-full text-base font-medium text-gray-900 bg-gray-100 rounded-tl-md rounded-bl-md  
                        border-gray-300 focus:ring-0 focus:bg-white
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
        
        <div className='flex flex-col sm:flex-row justify-between items-center gap-2'>
          <div className='w-full grow flex justify-between items-center gap-2 '>
            <div className=' flex gap-2 items-center py-3 pt-6 sm:py-6'>
              <p className=' font-bold'>Filter</p>
              <select className='font-bold right-0 focus:ring-0 rounded-md' onChange={FilterResult}>
                <option >All</option>
                <option>Active</option>
                <option>Completed</option>
              </select>
            </div>
            <div className='grow h-full max-w-[300px] '>
                <form className='grow' onSubmit={searchTask}>   
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input onChange={(e)=> setSearchValue(e.target.value)}
                          type="search"  value={searchValue} 
                          className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-100  
                          outline-none focus:shadow-md focus:bg-white focus:border-gray-50 placeholder:text-base placeholder:font-light
                        placeholder:text-gray-600" placeholder="Search task" name='q' />
                    </div>
                </form>
              </div>
          </div>
          <div className=' flex gap-2 items-center  py-3 sm:py-6 min-w-[150px]'>
            <p className=' font-bold'>Active tasks : </p>
            <h2 className=' font-bold text-2xl'>{active}</h2>
          </div>
        </div>
      <div className=' flex flex-col gap-2 pb-10'>
      
        {filterResult && filterResult.length > 0  ? filterResult.map((task , index ) => {
          return (
            <TaskItem 
              key={task.id} completeTask={completeTask} deleteTask={deleteTask} 
              index={index} description={task.description} active={task.active}
              created_at={task.created_at}
            />
          )
        }): (
          <div>
            <h2>Empty record! create task</h2>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default MainContent
