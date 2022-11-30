import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserList from './components/pages/UserList';
import './App.css';
import Menubar from './components/layouts/Menubar';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Menubar />
        <Routes>

          <Route path='/' element={<UserList/>}/>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
