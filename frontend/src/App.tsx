import React from 'react';
import UserList from './components/pages/UserList';
import './App.css';
import Menu from './components/layouts/Menubar';
import SignIn from './components/signin/SignIn';
import CreateUser from './components/user/CreateUser';
import TodoList from './components/dolist/TodoList';
import CreateGroup from './components/group/CreateGroup';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <BrowserRouter>
        <Menu></Menu>
    <Routes>
      
      <Route path="/" element={<UserList/>} />
      <Route path="/Createuser" element={<CreateUser/>} />
      <Route path="/Todolist" element={<TodoList/>} />
      <Route path="/Creategroup" element={<CreateGroup/>} />

    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
