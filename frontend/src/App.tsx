import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
//pages
import UserList from './components/user/UserList';
import Menubar from './components/layouts/Menubar';
import SignIn from './components/signin/SignIn';
import CreateUser from './components/user/CreateUser';
import TodoList from './components/dolist/TodoList';
import CreateGroup from './components/group/CreateGroup';
import MyGroup from './components/group/MyGroup';
import AddGroup from './components/group/AddGroup'
import EditUser from './components/user/EditUser';

function App() {

  const [Msg,setMsg] = React.useState("");

  useEffect(() => {
    const msg = localStorage.getItem("msg");
    if (msg === "login complete") {
      setMsg(msg)
    }
  },[]);

  if (!Msg) {
    return <SignIn></SignIn>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <BrowserRouter>
        <Menubar/>
        <Routes>

          <Route path="/user-list" element={<UserList />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/" element={<MyGroup />} />
          <Route path="/add-group" element={<AddGroup />} />
          <Route path="/edit-user" element={<EditUser />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
