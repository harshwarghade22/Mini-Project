import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Reserve1 from './components/Reserve1';
import Reserve2 from './components/Reserve2';

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Details />} />
          <Route path='/reserve1' element={<Reserve1 />} />
          <Route path='/reserve2' element={<Reserve2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
