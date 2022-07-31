import React from 'react';
import HeroPage from './pages/HeroPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditPage from './pages/EditPage';
import Index from './pages/NotFoudPage';



const App: React.FC = () => {

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroPage />}/>
          <Route path='/superHero/:id' element={<EditPage/>}/>
          <Route path='*' element={<Index/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
