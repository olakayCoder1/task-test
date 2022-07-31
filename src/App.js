import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';

function App() {
    

  const [ showNav , setShowNav ] = useState(false)

  function handleNav(){
    setShowNav(!showNav)
    console.log('')
  }
  
  return (
    <div className='px-3 lg:px-0 w-full h-screen'>
      {/* HEADER SECTION */}
      <Header handleNav={handleNav}/>
      {/* MAIN SECTION  */}
      
      <div className='w-full h-full flex gap-32'>
      {/* SIDE BAR  */}
      <Sidebar navDisplay={showNav}/>
      <div className='w-full lg:w-3/6 h-full overflow-y-scroll pb-12'>
      <MainContent />
      </div>
      
      </div>
    </div>
  );
}

export default App;
