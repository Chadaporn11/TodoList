import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
//pages
import UserList from './components/user/UserList';
import Menu from './components/layouts/Menubar';
import SignIn from './components/signin/SignIn';
import CreateUser from './components/user/CreateUser';
import TodoList from './components/dolist/TodoList';
import CreateGroup from './components/group/CreateGroup';
import MyGroup from './components/group/MyGroup';
import AddGroup from './components/group/AddGroup';

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>

          <Route path="/" element={<UserList />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/my-group" element={<MyGroup />} />
          <Route path="/add-group" element={<AddGroup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
