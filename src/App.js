import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
    
  return (
    <div className='px-3 lg:px-0 w-full h-screen'>
      {/* HEADER SECTION */}
      <Header/>
      {/* MAIN SECTION  */}
      <div className='w-full h-full flex gap-20'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
