import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import MainContent from './components/MainContent';
import { Sidebar } from 'flowbite-react';

function App() {
    

  const [ showNav , setShowNav ] = useState(false);
  const [ lgNav , setLgNav ] = useState(true);
  const [ mobileNav , setMobileNav ] = useState(false)

  function handleNav(){
    setShowNav(!showNav)
  }
  function handleMobileNav(){
    setMobileNav(!mobileNav)
  }

  function computerNav(){
    setLgNav(!lgNav);
    console.log('Computer')
  }
  
  return (
    <div className='px-3 lg:px-0 w-full h-screen'>
      {/* HEADER SECTION */}
      <Header handleNav={handleNav} mobileNav={handleMobileNav} lgNavHandle={computerNav}/>
      {/* MAIN SECTION  */}
      
      <div className='w-full h-full flex gap-20'>
      {/* SIDE BAR  */}
        <Sidebar navDisplay={showNav} mobile={mobileNav} mobileNav={handleMobileNav} handleNav={handleNav} computerNav={lgNav}/>
      
        <MainContent />
      
      </div>
    </div>
  );
}

export default App;
