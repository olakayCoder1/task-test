import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';

function App() {
    

  const [ showNav , setShowNav ] = useState(false);
  const [ mobileNav , setMobileNav ] = useState(false)

  function handleNav(){
    setShowNav(!showNav)
    console.log(showNav)
  }
  function handleMobileNav(){
    setMobileNav(!mobileNav)
    console.log(mobileNav)
  }
  
  return (
    <div className='px-3 lg:px-0 w-full h-screen'>
      {/* HEADER SECTION */}
      <Header handleNav={handleNav} mobileNav={handleMobileNav}/>
      {/* MAIN SECTION  */}
      
      <div className='w-full h-full flex gap-40'>
      {/* SIDE BAR  */}
      <Sidebar navDisplay={showNav} mobile={mobileNav} mobileNav={handleMobileNav} handleNav={handleNav}/>
      
      <MainContent />
      
      
      </div>
    </div>
  );
}

export default App;
